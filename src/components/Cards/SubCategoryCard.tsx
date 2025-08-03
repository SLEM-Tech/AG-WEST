"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "../hooks";
import Picture from "../picture/Picture";
import { convertToSlug } from "@constants";

interface SubCategoryCardProps {
	id?: string;
	image?: string;
	name: string;
}

const SubCategoryCard = ({ id, image, name }: SubCategoryCardProps) => {
	const { data: selectedId } = useAppSelector((state) => state.subCategoryId);
	const slug = `/category/${convertToSlug(name)}-${id}`;

	const isSelected = selectedId === id;
	const hasImage = !!image;

	return (
		<Link
			href={slug}
			className={`flex flex-col items-center group w-fit cursor-pointer rounded-md shrink-0 transition-transform hover:scale-105 ${
				isSelected ? "border-2 border-primary" : ""
			}`}
		>
			<div className="px-8 pt-2">
				{hasImage ? (
					<Picture
						src={image!}
						alt={`Image for ${name}`}
						className="w-[300px] h-[200px] object-contain object-center bg-primary group-hover:scale-105 transition-transform duration-300 rounded"
					/>
				) : (
					<div className="w-[300px] h-[200px] bg-primary grid place-items-center rounded">
						<h4
							dangerouslySetInnerHTML={{ __html: name }}
							className="text-white font-semibold text-xl text-center line-clamp-1 px-2"
						/>
					</div>
				)}

				{/* Show name below image for both cases */}
				{hasImage && (
					<h4
						dangerouslySetInnerHTML={{ __html: name }}
						className="text-primary font-semibold text-center leading-6 pb-2"
					/>
				)}
			</div>
		</Link>
	);
};

export default SubCategoryCard;
