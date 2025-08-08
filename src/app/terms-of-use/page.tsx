"use client";
import React, { useEffect, useState } from "react";
import AppLayout from "@src/components/AppLayout";
import { useSearchParams } from "next/navigation";
import { CompanyName } from "@constants";
import RefundPolicy from "./_components/RefundPolicy";
import DeliveryReturn from "./_components/DeliveryReturn";

const Page = () => {
	const searchParams = useSearchParams().toString();
	const search = searchParams.replace(/=$/, "");
	const [activeTab, setActiveTab] = useState<string>("termsOfUse");

	useEffect(() => {
		if (search === "terms-of-use") {
			setActiveTab("termsOfUse");
		} else if (search === "privacy-policy") {
			setActiveTab("privacyPolicy");
		} else if (search === "delivery-return") {
			setActiveTab("deliveryReturn");
		} else if (search === "refund-policy") {
			setActiveTab("refundPolicy");
		}
	}, [search]);

	const handleTabClick = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<AppLayout>
			<main className='bg-white mx-auto mt-32 pb-24'>
      <section className='flex w-full flex-col items-center pt-8 xl:pt-16 gap-2 sm:gap-3 px-2 sm:px-8 md:px-16 text-center'>
        <h4 className='text-black text-base sm:text-xl font-semibold leading-[120%]'>
          Our Policies
        </h4>
        <h3 className='font-semibold text-xl sm:text-2xl md:text-3xl leading-[150%]'>
          AG West Multiconcepts Distributions Limited Policies
        </h3>
        <span className='text-xs sm:text-sm xl:text-base leading-[150%] text-gray-400 sm:max-w-3xl slg:max-w-2xl'>
          At AG West Multiconcepts Distributions Limited, we excel in digital goods distribution, audiovisual media products, web and mobile application development, and comprehensive business process solutions while ensuring innovation and customer satisfaction.
        </span>
        <div className='flex gap-2 mt-3 xl:mt-8 text-[10px] xs:text-xs sm:text-sm slg:text-base leading-[140%] bg-[#F5F5F5] p-1 rounded-md transition'>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "termsOfUse"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("termsOfUse")}
          >
            Terms of use
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "privacyPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("privacyPolicy")}
          >
            Privacy Policy
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "deliveryReturn"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("deliveryReturn")}
          >
            Delivery & Return
          </button>
          <button
            className={`px-2 xl:px-4 py-2 rounded-md ${
              activeTab === "refundPolicy"
                ? "bg-white text-black"
                : "bg-[#F5F5F5] text-[#667085]"
            }`}
            onClick={() => handleTabClick("refundPolicy")}
          >
            Refund Policy
          </button>
        </div>
      </section>
      
      <div className='flex mx-auto w-full mt-4 md:mt-8 text-base leading-[155%] px-2 sm:px-0 sm:max-w-xl slg:max-w-2xl pb-20'>
        {activeTab === "termsOfUse" && (
          <div id='termsOfUse' className='text-[#667085]'>
            <h4 className='text-base sm:text-xl xl:text-2xl font-semibold text-black capitalize'>
              Terms of Use - AG West Multiconcepts Distributions Limited
            </h4>

            <p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
              By engaging AG West Multiconcepts Distributions Limited for digital goods distribution, audiovisual media products, web/mobile application development, or business process solutions, you agree to the following comprehensive terms and conditions:
            </p>

            <ul className='list-disc pl-5 mt-2 space-y-2 text-xs md:text-sm xl:text-base'>
              <li>
                <span className='font-medium'>Business Process Solutions:</span> We analyze and optimize business processes through technology integration, workflow automation, and digital transformation initiatives. Our solutions streamline operations, improve efficiency, and enhance customer engagement across various industries.
              </li>
              <li>
                <span className='font-medium'>Manufacturers' Representative Services:</span> As authorized representatives for technology manufacturers, we provide product sourcing, technical support, warranty services, and local distribution channels. All represented products meet quality standards and include full manufacturer backing.
              </li>
              <li>
                <span className='font-medium'>Digital Equipment Distribution:</span> Our distribution network includes computers, mobile devices, audio equipment, video production tools, and specialized digital equipment. We maintain inventory, provide technical specifications, and offer bulk purchasing options for businesses.
              </li>
              <li>
                <span className='font-medium'>Custom Development Projects:</span> Custom web and mobile applications are developed using modern frameworks and technologies. Projects include requirements analysis, user experience design, development, testing, and deployment with ongoing maintenance support.
              </li>
              <li>
                <span className='font-medium'>General Merchandise & Contracts:</span> We handle general merchandise sourcing and fulfill general contract obligations including project management, timeline coordination, and quality assurance across diverse business sectors and requirements.
              </li>
              <li>
                <span className='font-medium'>Payment & Contract Terms:</span> Digital products and equipment require payment confirmation before delivery. Development projects are billed in phases with milestone-based payments. Distribution contracts include volume discounts and extended payment terms for qualified business customers.
              </li>
            </ul>

            <p className='mt-4 leading-[1.8] text-xs md:text-sm xl:text-base'>
              <span className='font-medium'>Quality Assurance:</span> All distributed products undergo quality verification, and custom applications are thoroughly tested before deployment. We maintain quality standards across all service areas with continuous improvement processes.
            </p>

            <p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
              <span className='font-medium'>Innovation & Technology:</span> We stay current with emerging technologies and digital trends to provide cutting-edge solutions. Our development team continuously updates skills and technologies to deliver modern, efficient applications.
            </p>
          </div>
        )}

        {activeTab === "privacyPolicy" && (
          <div id='privacyPolicy' className='text-[#667085]'>
            <h4 className='text-sm sm:text-xl xl:text-2xl font-semibold text-black'>
              PRIVACY POLICY - AG WEST MULTICONCEPTS DISTRIBUTIONS LIMITED
            </h4>
            
            <p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
              AG West Multiconcepts Distributions Limited is committed to protecting privacy across our diverse services including digital distribution, audiovisual media, application development, and business solutions. This policy explains our comprehensive data practices.
            </p>

            <h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
              MULTI-SERVICE DATA COLLECTION
            </h4>
            
            <ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-decimal pl-4'>
              <li>Business and individual customer information for distribution and development services</li>
              <li>Digital product usage analytics and equipment performance data</li>
              <li>Application user behavior data for web and mobile app optimization</li>
              <li>Audiovisual content preferences and viewing patterns for content curation</li>
              <li>Business process analysis data for workflow optimization consulting</li>
              <li>Distribution partner and manufacturer relationship data</li>
              <li>Custom development project specifications and technical requirements</li>
              <li>Payment and transaction information across all service areas</li>
            </ul>

            <h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
              COMPREHENSIVE DATA USAGE
            </h4>
            
            <ul className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base list-disc pl-4'>
              <li>To distribute digital goods and equipment efficiently across our network</li>
              <li>To develop and optimize web and mobile applications for enhanced user experience</li>
              <li>To curate and deliver relevant audiovisual media content</li>
              <li>To analyze and improve business processes through technology solutions</li>
              <li>To manage manufacturer relationships and product warranties</li>
              <li>To provide technical support across all distributed products and services</li>
              <li>To customize business solutions based on client requirements and industry needs</li>
              <li>To ensure security and prevent fraud across all service platforms</li>
            </ul>

            <h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
              MULTI-PLATFORM SECURITY MEASURES
            </h4>
            
            <p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
              We implement comprehensive security protocols across all our service areas including encrypted data transmission for digital distribution, secure development environments for custom applications, and protected content delivery for audiovisual media. Business process data is handled with enterprise-grade security measures and access controls.
            </p>

            <h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
              PARTNER & MANUFACTURER DATA SHARING
            </h4>
            
            <p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
              As manufacturers' representatives, we share necessary information with partners for product support, warranty services, and distribution optimization. All sharing is governed by strict confidentiality agreements. Custom application data remains confidential and is never shared without explicit client consent. Content creator partnerships include privacy protection requirements.
            </p>

            <h4 className='text-sm sm:text-base lg:text-lg font-medium mt-4'>
              CLIENT CONTROL ACROSS SERVICES
            </h4>
            
            <p className='mt-2 leading-[1.8] text-xs md:text-sm xl:text-base'>
              Clients have comprehensive control over their data across all our service areas. Application users can manage their privacy settings and data sharing preferences. Business process clients receive detailed data handling reports. Distribution customers can access their transaction and product history. For privacy inquiries across any service area, contact privacy@agwestmulti.com.ng.
            </p>
          </div>
        )}

        {activeTab === "deliveryReturn" && (
          <div id='deliveryReturn' className='text-[#667085]'>
            <h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
              MULTI-SERVICE DELIVERY POLICY - AG WEST MULTICONCEPTS DISTRIBUTIONS LIMITED
            </h3>

            <p className='text-xs md:text-sm xl:text-base mb-4'>
              AG West Multiconcepts Distributions Limited provides comprehensive delivery solutions across our diverse service portfolio including digital distribution, application development, audiovisual media, and business process optimization with guaranteed quality and timely execution.
            </p>

            <div className='mb-6'>
              <h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
                Digital Goods & Equipment Distribution
              </h4>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <h5 className='font-medium text-xs md:text-sm mb-1'>Digital Products</h5>
                  <ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
                    <li>Instant digital delivery for software and media content</li>
                    <li>Secure download links with 48-hour access window</li>
                    <li>Multi-format delivery options for different device types</li>
                    <li>Bulk licensing delivery for business customers</li>
                  </ul>
                </div>
                <div>
                  <h5 className='font-medium text-xs md:text-sm mb-1'>Physical Equipment</h5>
                  <ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
                    <li>Same-day delivery within Lagos for in-stock items</li>
                    <li>2-5 business days for special orders and custom configurations</li>
                    <li>Free installation and setup for equipment over ₦500,000</li>
                    <li>National distribution network with tracking capabilities</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
                Web & Mobile Application Development
              </h4>
              <ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
                <li>Project initiation and planning phase: 3-5 business days</li>
                <li>Design and prototype delivery: 1-2 weeks from approval</li>
                <li>Development sprints with weekly progress demonstrations</li>
                <li>Beta testing phase with client feedback integration</li>
                <li>Final deployment with user training and documentation</li>
                <li>Post-launch monitoring and optimization for 30 days</li>
              </ul>
            </div>

            <div className='mb-6'>
              <h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
                Audiovisual Media Services
              </h4>
              <ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
                <li>Content library access activated immediately upon purchase</li>
                <li>Custom content production: 2-6 weeks depending on complexity</li>
                <li>Multi-format delivery including streaming and download options</li>
                <li>Corporate training materials delivered with implementation guides</li>
                <li>Content updates and revisions included for 12 months</li>
                <li>Technical support for content integration and playback</li>
              </ul>
            </div>

            <div className='mb-6'>
              <h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
                Business Process & Consulting Services
              </h4>
              <div className='space-y-3'>
                <div>
                  <p className='font-medium text-xs md:text-sm'>Process Analysis:</p>
                  <ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
                    <li>Initial business assessment completed within 5 business days</li>
                    <li>Comprehensive process mapping and recommendations report</li>
                    <li>Implementation roadmap with timeline and resource requirements</li>
                    <li>Regular progress monitoring and optimization adjustments</li>
                  </ul>
                </div>
                <div>
                  <p className='font-medium text-xs md:text-sm'>Technology Integration:</p>
                  <ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
                    <li>System integration planning and compatibility assessment</li>
                    <li>Custom integration development with testing and validation</li>
                    <li>Staff training programs for new systems and processes</li>
                    <li>Ongoing support and optimization for implemented solutions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='mb-6'>
              <h4 className='font-medium text-xs md:text-sm xl:text-base mb-2'>
                Quality Assurance & Support
              </h4>
              <ul className='list-disc pl-5 space-y-1 text-xs md:text-sm xl:text-base'>
                <li>All distributed products tested and verified before delivery</li>
                <li>Custom applications undergo comprehensive quality assurance testing</li>
                <li>Audiovisual content reviewed for quality and compliance standards</li>
                <li>Business process implementations include success metrics and monitoring</li>
                <li>Comprehensive warranty and support services across all product categories</li>
                <li>Customer satisfaction surveys and continuous improvement processes</li>
              </ul>
            </div>

          </div>
        )}

        {activeTab === "refundPolicy" && (
          <div id='refundPolicy' className='text-[#667085]'>
            <h3 className='font-semibold text-sm md:text-base xl:text-lg mb-2'>
              REFUND POLICY - AG WEST MULTICONCEPTS DISTRIBUTIONS LIMITED
            </h3>
            <p className='text-xs md:text-sm xl:text-base mb-4'>
              Effective Date: {new Date().toLocaleDateString('en-GB')}
            </p>

            <p className='text-xs md:text-sm xl:text-base mb-4'>
              At AG West Multiconcepts Distributions Limited, we are committed to delivering exceptional value across our diverse services including digital distribution, application development, audiovisual media, and business solutions. Our comprehensive refund policy ensures fair treatment across all service areas.
            </p>

            <ul className='list-disc pl-5 space-y-3 leading-[1.8] text-xs md:text-sm xl:text-base'>
              <li>
                <span className='font-medium'>1. Digital Distribution Refunds</span>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>30-day refund guarantee for all distributed digital products</li>
                  <li>Equipment refunds for defective or incompatible items within 14 days</li>
                  <li>Digital content refunds for technical issues preventing access or use</li>
                  <li>Bulk purchase refunds for unused licenses with prorated calculations</li>
                  <li>Manufacturer warranty claims processed at no additional cost</li>
                </ul>
              </li>

              <li>
                <span className='font-medium'>2. Application Development Refunds</span>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>Milestone-based refunds for incomplete development phases</li>
                  <li>Full refund if application fails to meet agreed specifications</li>
                  <li>Performance-based refunds for applications not meeting efficiency targets</li>
                  <li>Technical feasibility refunds if requirements cannot be achieved</li>
                  <li>User acceptance testing failure refunds with corrective options</li>
                </ul>
              </li>

              <li>
                <span className='font-medium'>3. Audiovisual Media Refunds</span>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>Content quality refunds for media not meeting advertised standards</li>
                  <li>Custom production refunds for content not meeting client specifications</li>
                  <li>Technical delivery refunds for content that cannot be accessed or played</li>
                  <li>Licensing issue refunds if content rights are disputed or withdrawn</li>
                  <li>Format compatibility refunds for content unusable on specified platforms</li>
                </ul>
              </li>

              <li>
                <span className='font-medium'>4. Business Process Solution Refunds</span>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>Consulting refunds if analysis doesn&apos;t provide actionable business insights</li>
                  <li>Implementation refunds for solutions that don&apos;t improve business processes</li>
                  <li>ROI guarantee refunds if promised business improvements aren&apos;t achieved</li>
                  <li>Integration failure refunds for systems that cannot be successfully connected</li>
                  <li>Training program refunds if staff cannot effectively use implemented solutions</li>
                </ul>
              </li>

              <li>
                <span className='font-medium'>5. Non-Refundable Services & Products</span>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>Successfully completed development projects meeting all requirements</li>
                  <li>Custom content production accepted and delivered according to specifications</li>
                  <li>Business consulting services delivered within agreed scope and timeline</li>
                  <li>Digital products downloaded and successfully used beyond trial period</li>
                  <li>Physical equipment damaged due to misuse or normal wear and tear</li>
                </ul>
              </li>

              <li>
                <span className='font-medium'>6. Multi-Service Refund Process</span>
                <p className='mt-1'>To request refunds across any service area:</p>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>Provide service documentation and detailed issue description</li>
                  <li>Include supporting evidence (screenshots, error logs, performance data)</li>
                  <li>Specify preferred resolution method (refund, credit, alternative solution)</li>
                </ul>
              </li>

              <li>
                <span className='font-medium'>7. Comprehensive Assessment Process</span>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>Multi-disciplinary review team assesses refund requests by service type</li>
                  <li>Technical experts evaluate development and integration issues</li>
                  <li>Business analysts review process improvement and ROI claims</li>
                  <li>Quality assurance team validates content and product defects</li>
                  <li>Client consultation to explore alternative solutions before processing refunds</li>
                </ul>
              </li>

              <li>
                <span className='font-medium'>8. Alternative Resolution Options</span>
                <ul className='list-disc pl-5 mt-1 space-y-1'>
                  <li>Service credits applicable across all business areas and future projects</li>
                  <li>Product exchanges for equivalent or upgraded alternatives</li>
                  <li>Additional consultation and optimization services at no charge</li>
                  <li>Extended warranty and support coverage for problematic implementations</li>
                  <li>Custom solutions development to address specific client needs</li>
                </ul>
              </li>
            </ul>

          </div>
        )}
      </div>
    </main>
		</AppLayout>
	);
};

export default Page;
