"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { FormatMoney2 } from "../Reusables/FormatMoney";
import { RiShoppingBagFill } from "react-icons/ri";
import Picture from "../picture/Picture";
import Link from "next/link";
import { convertToSlug } from "@constants";
import { PlusCircle } from "lucide-react";

interface ProductCard2Props {
	id: string | number;
	image: string;
	oldAmount?: string;
	newAmount: string;
	description: string;
	boxShadow?: boolean;
}

const ProductCard2 = ({
	id,
	image,
	oldAmount,
	newAmount,
	description,
	boxShadow,
}: ProductCard2Props) => {
	const router = useRouter();
	const { addItem, removeItem, updateItem, getItem } = useCart();
	const [count, setCount] = useState(0);
	const ID = id.toString();
	const cartItem = getItem(ID);
	const cartItemCount = cartItem ? cartItem.quantity : 0;
	const NewAmount = parseInt(newAmount);
	// const OldAmount = parseInt(oldAmount)
	// const handleClick = () => {
	// 	router.push(`/home-item/product/${description}-${id}`);
	// };

	const handleCartClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		setCount(count + 1);
		// Adding the first product from the `products` array to the cart
		addItem({
			id: ID,
			name: description,
			price: NewAmount,
			quantity: count,
			image: image,
		});
	};

	const handleMinusCartClick = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevents the event from propagating further

		const newCount = Math.max(count - 1, 0);

		if (newCount === 0) {
			// If count becomes 0, remove the item from the cart
			removeItem(ID);
		} else {
			// Update the cart item with the new quantity
			updateItem(ID, {
				quantity: newCount,
			});
		}

		setCount(newCount);
	};

	const handlePlusCartClick = (e: React.MouseEvent) => {
		e.stopPropagation(); // Prevents the event from propagating further

		const newCount = count + 1;

		// Adding the product to the cart with the updated quantity
		addItem({
			id: ID,
			name: description,
			price: NewAmount,
			quantity: newCount,
			image: image,
		});

		setCount(newCount);
	};

	const slugDesc = convertToSlug(description);

	return (
		<div
			className={`flex flex-col gap-2 py-1 rounded-xl justify-center items-center min-w-[150px] md:min-w-[250px] slg:min-w-[250px] slg:max-w-[250px] h-[200px] sm:h-[230px] slg:h-[260px] cursor-pointer ${
				boxShadow ? " bg-white" : "border-[1px] border-[#bfbfbf4f]"
			} hover:shadow-lg hover:scale-105 transition`}
		>
			<div className='flex-[.8] w-full relative flex items-center justify-center overflow-hidden rounded-t-sm'>
				<Link href={`/home-item/product/${slugDesc}-${id}`} className='w-full'>
					<Picture
						src={image || ""}
						alt={`${description}-image`}
						className='absolute top-0 object-cover object-center h-full w-full rounded-md'
						loading='eager'
					/>
				</Link>
			</div>
			<div className='flex-[.2] flex w-full flex-col px-2 pb-1'>
				<Link
					href={`/home-item/product/${slugDesc}-${id}`}
					dangerouslySetInnerHTML={{ __html: description }}
					className='line-clamp-1 text-xs sm:text-sm text-text_color font-semibold leading-[1.3] w-[12rem]'
				/>
				<div className='flex items-center justify-between'>
					<h4 className='text-xs sm:text-base text-primary font-[400] leading-[1.8]'>
						{NewAmount ? <FormatMoney2 value={NewAmount} /> : "Out of Stock"}
					</h4>

					<div
						className={`flex items-center gap-3 rounded-full text-white px-2 py-1 text-xs sm:text-sm transition ${
							cartItemCount !== 0 && "bg-primary"
						}`}
					>
						{cartItemCount === 0 ? (
							<button
								onClick={handleCartClick}
								className={`flex items-center gap-1 px-2 py-1 text-white text-xs font-medium rounded-full transition ${
									cartItemCount ? "bg-white" : "bg-primary"
								}`}
							>
								<PlusCircle className="w-4 h-4 mr-3" />
								<span>Buy</span>
							</button>
						) : (
							<>
								<AiOutlineMinus onClick={handleMinusCartClick} />
								<span className=''>{cartItemCount}</span>
								<AiOutlinePlus onClick={handlePlusCartClick} />
							</>
						)}
					</div>
				</div>

			</div>
		</div>
	);
};

export default ProductCard2;
