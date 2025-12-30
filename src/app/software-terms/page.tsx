import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Software Terms & Conditions',
  description: 'Read the Software Terms and Conditions for Posso Ltd to understand your rights and obligations when using our software and services.',
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: '/software-terms',
  },
};


export default function SoftwareTermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="mx-auto max-w-3xl prose prose-invert">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl gradient-text">
              Software Terms & Conditions
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Last updated: 8th of March 2020
            </p>

            <div className="space-y-6 text-slate-300 mt-8">
                <p><strong>1.1</strong> By using any company services, you agree to be bound by the Terms herein. If you do not agree to any of these Terms, do not use any company product and services.</p>
                <p><strong>1.2</strong> These terms and conditions apply to all users who receive access to Software/Application, Mobile apps, Website and/or other products, applications & services provided by Posso Ltd, irrespective of whether the users pay a subscription fee or not.</p>
                <p><strong>1.3</strong> We reserve the right, at any time, to amend, modify, alter, or update the terms and conditions of this agreement. If you continue to use the Company’s services, your use will be governed by the updated terms.</p>
                <p><strong>1.4</strong> No agency, partnership, joint venture, or employment is created as a result of these terms, and the user does not have any authority of any kind to bind the Company in any respect whatsoever.</p>
                <p><strong>1.5</strong> By agreeing to the terms and conditions herein the User warrants that they are not and will not be deemed a ‘consumer’ as defined in The Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013. These terms were last updated on 8th of March 2020.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">2. Account Information</h2>
                <p><strong>2.1</strong> You must be at least 18 years old to purchase and/or subscribe for a license to access and use Software/Application, Mobile apps, Website and/or other products, applications & services (collectively the “Services”).</p>
                <p><strong>2.2</strong> You agree to provide accurate, current, and complete information during the subscription process and to update such information to keep it accurate, current and complete. Any significant updates to the User’s personal account information, governed by GDPR, shall be requested in writing to info@posso.uk with a valid reason for the requested changes. Posso Ltd, in its sole discretion and were deemed necessary, reserves the right to request proof of any changes with relation to personal data.</p>
                <p><strong>2.3</strong> We reserve the right to suspend or terminate your subscription and your access to our services if any information provided during the subscription process or thereafter proves to be inaccurate, not current or incomplete.</p>
                <p><strong>2.4</strong> Once terminated, the Company shall permanently delete the User’s account and all data associated with it. The Company shall not be held responsible for the User’s account data after termination.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">3. GDPR and Data Security</h2>
                <p><strong>3.1</strong> The Company endeavours to use reasonable security measures to keep the User’s personal data highly confidential and protect the User against unauthorized access to their account, account information, and any data which may be stored by the Company Cloud Software. However, the Company cannot guarantee absolute security of a user’s account, account information and/or data, and the Company cannot promise that the security measures will prevent third-party “attackers” from illegally accessing the Services or their content. The User acknowledges that their submission of any information on or through the Services is at the User’s own risk and the User accepts all risks of unauthorized access to the Services, account information and any other information provided to the Company or through the Software.</p>
                <p><strong>3.2</strong> For the avoidance of confusion, the User shall typically function as the “Data Controller” for any personal data they supply to Posso Ltd to perform our services. While the data controller will determine the motives and means of processing personal data, the data processor will process the data on behalf of the data controller. Therefore, Posso Ltd is a “Data Processor” that processes personal data on behalf of the Data Controller while they are using the Posso Ltd services. Any such data controlled by the User shall be governed by the General Data Protection Regulation (GDPR). Posso Ltd shall not be held liable for any breach in GDPR by the User.</p>
                <p><strong>3.3</strong> Posso Ltd, in its capacity of Data Processor, can only process data currently have stored on the Cloud Software. Any data permanently modified or deleted from the Cloud Software or the User’s personal account, cannot be retrieved and Posso Ltd carries no responsibilities with relation to any such previous data.</p>
                <p><strong>3.4</strong> Data controllers will hold the responsibility for the implementation of relevant technical and organisational measures to substantiate and demonstrate that their data is processed in compliance with the GDPR norms. All obligations regarding concepts such as lawfulness, transparency and fairness, data minimisation, purpose limitation, and preciseness, as well as fulfilling data subject requests lie with the Data Controller.</p>
                <p><strong>3.5</strong> Posso Ltd does not have any kind of authority over the data protection notices, policies, and terms and conditions of the User. Therefore, the User will forfeit and keep Posso Ltd and its affiliates forfeited against all losses, costs, and liabilities and all expenses incurred, including reasonable legal or other professional expenses, arising out of or in connection with any claim regarding:</p>
                <ul className="list-disc pl-8">
                    <li><strong>3.5.1</strong> a GDPR breach, or</li>
                    <li><strong>3.5.2</strong> any whatsoever liability emerging in respect of the cookies, or</li>
                    <li><strong>3.5.3</strong> the capture of Personal Data through the User’s website(s), or</li>
                    <li><strong>3.5.4</strong> the agreement of data subjects for dispersing any Personal Data outside of the European Economic Area by Posso Ltd.</li>
                    <li><strong>3.5.5</strong> Any liability under this subsection will not be subject to any limitation of liability or exclusions of liability under the Agreement.</li>
                </ul>
                <p><strong>3.6</strong> Posso Ltd shall inform the Data Controller without any undue delay or within seven (7) days upon Posso Ltd or any sub-processor observe a breach impacting personal data. At this point in time Posso Ltd will provide the Customer with all adequate information required to meet any obligation so as to inform the concerned data protection authority or to inform the victim under applicable Data Protection laws.</p>
                <p><strong>3.7</strong> Posso Ltd shall concur to guide the User with all subject access requests that may be obtained from the end-customer within an appropriate time limit (at the User’s cost), nonetheless, Posso Ltd shall ensure that adequate technical and organisational measures are in place, so that the User can meet its obligations to those requesting access to their personal data held by Posso Ltd. The Company’s assistance with regards to subject access requests is limited to any data currently stored by the User on the Cloud Software. Posso Ltd will not be able to retrieve any old data previously modified or deleted from the Cloud.</p>
                <p><strong>3.8</strong> The User hereby consents that Posso Ltd may engage any of its subcontractors as sub-processors without the requirement of further consent. Therefore, the subcontractors are considered as approved under this clause. The User may request a full list of current sub-processors at any time.</p>
                <p><strong>3.9</strong> The Company shall not be held liable for any losses arising out of the unauthorized use of a User’s account and the User agrees to indemnify and hold the Company harmless, including the officers, directors, shareholders, employees, distributors, agents, partners, licensors, information providers and account providers, as applicable, for any improper, unauthorized or illegal uses of the User’s account.</p>
                <p><strong>3.10</strong> The User’s login credentials may only be used by the User. Sharing a login with other people is not permitted. An organization may create separate logins for as many individual users as it wishes. Each user is responsible for maintaining the security of their account login and passwords. Each user agrees that they will not disclose their password to any third party and that they will take sole responsibility for any activities or actions under the User’s account, whether or not you have authorized such activities or actions.</p>
                <p><strong>3.11</strong> The user agrees to immediately notify the Company of any unauthorized use of their account, or any other breach of security at info@posso.uk</p>
                <p><strong>3.12</strong> Right to Erasure: Under Article 17 of GDPR, the User reserves the right to request an erasure of all their personal data from the Posso Ltd user account records, should the User wish to do so once this agreement is terminated. Any such Right to Erasure request must be communicated to Posso Ltd in writing info@posso.uk. In addition, as a Data Controller, it is the User’s responsibility to comply with any Right to Erasure requests received by the User from any of their customers regarding data stored on the Cloud Software. Posso Ltd, as a Data Processor, carries no responsibility with regards to any Right to Erasure requests received by the User from any of their customers.</p>
                
                <h2 className="text-2xl font-bold text-slate-100 pt-4">4. Posso Ltd Hardware</h2>
                <p><strong>4.1</strong> The User may purchase hardware from Posso Ltd with or without a valid Cloud Software license subscription. Where the User purchases our hardware for use with a different software, Posso Ltd cannot guarantee that the hardware shall be compatible with the User’s software. The Company is not responsible for ensuring the User’s software compatibility to our hardware.</p>
                <p><strong>4.2</strong> All hardware purchases require a full upfront payment at the time of placing an order for dispatch.</p>
                <p><strong>4.3</strong> All hardware comes flat packed with instruction manuals/guides to help the User carry out full assembly of the equipment. The Company shall not be sending any engineers to carry out any installation or troubleshooting at the User’s location at any time.</p>
                <p><strong>4.4</strong> All hardware provided by the Company comes with one (1) year basic manufacturing warranty from the delivery dispatch date.</p>
                 <ul className="list-disc pl-8">
                    <li><strong>4.4.1</strong> In the event of a reasonable technical fault, the Company shall endeavour to troubleshoot any issues remotely, or request for the faulty hardware to be returned via the Warranty Returns Process in Section 12.</li>
                    <li><strong>4.4.2</strong> The Company reserves the right to repair the same faulty piece of equipment as many times as needed before offering a replacement or refund. The Company shall offer a replacement or refund only if the faulty equipment is non repairable.</li>
                    <li><strong>4.4.3</strong> Replacement hardware may be a refurbished piece of equipment with the same or better technical specification of the original hardware.</li>
                    <li><strong>4.4.4</strong> Upon replacement, the warranty remains one (1) year from the date of initial contract, not from the replacement date.</li>
                    <li><strong>4.4.5</strong> Theft, fire, tampering and mishandling is not covered under basic manufacturing warranty.</li>
                    <li><strong>4.4.6</strong> The Company is not liable if the hardware becomes unusable due to third-party software including, but not limited to, manufacturers and operating systems. No repair, replacement or refund shall be offered to the User in any such cases.</li>
                </ul>
                <p><strong>4.5</strong> The User shall obtain appropriate insurance to cover all hardware equipment, any other equipment, belongings and property against fire, theft, accidental damage and any other damage occurring due to an unlikely failure in any hardware provided by Posso Ltd. The Company shall not be held responsible for any loss of profits, business, goodwill, use, data or other intangible and tangible losses resulting from a failure in any hardware provided by Posso Ltd.</p>
                <p><strong>4.6</strong> Portable Appliance Testing (PAT) of all hardware equipment should be carried out by an individual deemed competent to do so. This is usually a trained individual with a valid Certificate of Competency in PAT testing. It is the User’s responsibility to ensure all hardware equipment is PAT tested regularly to comply with UK laws and regulations. Posso Ltd shall not be responsible for carrying out PAT tests or reminding the User of the need to carry out regular PAT testing.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">5. Cloud Software, Mobile Application Software, Web Application</h2>
                <p><strong>5.1</strong> The User can purchase our Cloud Software, Mobile Application Software, Web Application (the “Software”) license subscription with or without hardware provided by Posso Ltd . Should the User decide not to purchase hardware from Posso Ltd , the User agrees that they have access to hardware fully compatible with our Software. Where the User does not purchase our hardware, the Company shall not be held responsible if the software fails to work. The Company is not responsible for ensuring the User’s hardware compatibility to our Cloud Software.</p>
                <p><strong>5.2</strong> Our Cloud Software requires a suitable, fast, stable and reliable internet connection to ensure full and effective functionality of the Software. Posso Ltd recommends the use of wired internet connection for better connectivity, although this recommendation does not guarantee performance of the User’s internet provider.</p>
                <p><strong>5.3</strong> The Software is provided on an “as is” and “as available” basis. The use of the software is at the sole risk of the User.</p>
                <p><strong>5.4</strong> The Company shall endeavour to promptly address any technical glitches encountered while using the software, providing such glitches are brought to the Company’s attention immediately.</p>
                <p><strong>5.5</strong> The company does not warrant that:</p>
                <ul className="list-disc pl-8">
                    <li><strong>5.5.1</strong> The Software will meet the User’s specific requirements; or</li>
                    <li><strong>5.5.2</strong> The quality of the software, hardware and any other material purchased or obtained by the User will meet all the User’s expectations; or</li>
                    <li><strong>5.5.3</strong> The Software will always be accurate or reliable; or</li>
                    <li><strong>5.5.4</strong> The Software will be uninterrupted, timely, secure, or error-free; or</li>
                    <li><strong>5.5.5</strong> Any/all errors in the Software will be corrected.</li>
                </ul>
                <p><strong>5.6</strong> The Software contains generic settings for all aspects including taxations, promotions and menu setup. These are customisable as per the User’s needs. It is the User’s responsibility to update all necessary “Settings” before using the Software.</p>
                <p><strong>5.7</strong> In the event that the User is required to download any other software in connection with the Cloud Software, the User shall be unable to download and access such software unless they first agree to the license agreement relating to that software. Use of any such software is governed by these terms of use for any such license agreement.</p>
                <p><strong>5.8</strong> The User shall upload all menus, promotions and all other necessary data into the Cloud Software. The Company solely provides guidance on the procedure of uploading data onto the Software but the User holds the responsibility to upload the data themselves.</p>
                <p><strong>5.9</strong> All data uploaded by the User onto the Cloud Software is stored for the duration of the license subscription. The User shall download all data they wish to save before the license subscription is terminated. Once the license subscription is terminated, all data is permanently deleted. There is no possible way to retrieve deleted data.</p>
                <p><strong>5.10</strong> Posso Ltd uses third party’s servers, such GoDaddy. These servers are not an archive and Posso Ltd, or our Affiliates shall have no liability to you or any other person for loss, damage, or destruction of any of your content. Posso Ltd offers options data backup service, which enables your contents to be backed up to your own device regularly and automatically for an extra cost. https://sqlbackupandftp.com/ In the event of user losing their contents, the Company shall not be held liable by the User for any loss of profits, business, goodwill, use, data or other intangible and tangible losses resulting from such server failure.</p>
                <p><strong>5.11</strong> Any data deleted, at any time, from the Cloud Servers cannot be restored.</p>
                <p><strong>5.12</strong> In the event of an internet connection malfunction, Posso Ltd can run certain Software features offline. However, the User needs to connect to the internet as soon as possible. If no internet connection is established, all or some data will be lost and/or the system may stop working.</p>
                <p><strong>5.13</strong> To access the full features of the Software, the User shall ensure a suitable, fast, stable and reliable internet connection.</p>
                <p><strong>5.14</strong> Should the User require any additional new functionality of the Software, the User may submit a request in writing to the Company for assessment. The Company shall, within reasonable time, endeavour to review any such request and assess the compatibility of such new functionality within the Company’s services. The Company does not guarantee that it will be possible to implement any additional new functionality within the Company’s services. In addition, all design and/or functionality requests with potential of copyright infringement, with regards to a competitor company, shall be rejected.</p>
                <p><strong>5.15</strong> Cloud servers have 99% uptime. Should there be any planned maintenance of the servers, the Company shall endeavour to notify the User in advance of such planned maintenance. In the unlikely event of an unplanned disruption to the server functionality, the Company shall not be held liable by the User for any loss of profits, business, goodwill, use, data or other intangible and tangible losses resulting from such server failure.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">6. License Subscription Fees</h2>
                <p><strong>6.1</strong> The Company has several pricing options and subscription levels depending on the User’s requirements. The User shall select a subscription level based on their needs and Posso Ltd shall generate a “Quotation” in writing to the User’s email address as specified on their account information. By using the Software, the User accepts the terms of the Quotation and this Agreement.</p>
                <p><strong>6.2</strong> The User shall pay a monthly subscription fee for the Software provided by Posso Ltd on the same date of each calendar month, unless cancelled as per the Cancellation Policy in Section 14.</p>
                <p><strong>6.3</strong> Based on the User’s current license subscription level and cost, the subscription will be renewed monthly via specified mode of payment.</p>
                <p><strong>6.4</strong> If the User’s payment fails and no payment is done within seven (7)days of initial payment failure, the license subscription will be cancelled and data associated with it will be deleted permanently from the Cloud after thirty (30) days of the initial payment failure.</p>
                <p><strong>6.5</strong> The User may Upgrade or Downgrade their subscription at any time by giving us one calendar month notice. Once downgraded or upgraded, the monthly payment will be adjusted, and invoice will be changed accordingly. Downgrade option is not applicable if the User has subscribed to the lowest subscription level provided by Posso Ltd.</p>
                <p><strong>6.6</strong> The fees charged by the Company for use of the Software and/or Hardware are subject to change. The Company reserves the right to increase the subscription fee every year after the first twelve (12) months of the subscription by either 3% of the current subscription charges, or as per the inflation rate recognised by the UK Office of National Statistics, whichever is greater.</p>
                <ul className="list-disc pl-8">
                    <li><strong>6.6.1</strong> The Company will endeavour to notify the User at least 30 days prior to increasing the subscription fees.</li>
                    <li><strong>6.6.2</strong> The User’s continued use of the software will be deemed acceptance of the renewed terms of payment.</li>
                    <li><strong>6.6.3</strong> The User reserves the right to cancel their subscription, should the increased subscription cost be outside the User’s financial abilities. The User needs to exercise this right as per the process outlined in Section 14. Should the User wish to re-subscribe after their subscription has been cancelled, a new Quotation and Terms shall be generated.</li>
                </ul>
                <p><strong>6.7</strong> All prices are listed and charged to the User’s bank account in GBP (£).Any charges for transactions in foreign currency, other than GBP (£), shall be bared by the User.</p>
                <p><strong>6.8</strong> This Section 6 is not applicable to Users with a Quotation for a ‘Free Subscription’ (please refer to Section 7).</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">7. Free Subscription</h2>
                <p><strong>7.1</strong> Non-profit organisations may apply in writing, via email or post, to Posso Ltd to receive a license to access our Cloud Software services free of charge for an extended period of time, up to a maximum of one (1) calendar years.</p>
                <p><strong>7.2</strong> The User understands and agrees that the Company in its sole discretion reserves the right to accept or reject any applications for “Free Subscription”, in whole or in part, notwithstanding prior receipt by the User of notice of acceptance of this subscription. The Company shall have no obligation hereunder until the Company shall execute and deliver to the User an applicable Quotation and an executed copy of this Agreement. If this subscription is rejected in whole, or the offering of “Free Subscription” is terminated by the Company for any reason, the User reserves the right to opt in for a paid license subscription as per Section 6.</p>
                <p><strong>7.3</strong> Should a ‘Free Subscription’ last the maximum of one (1) calendar years, a new application will need to be submitted for review by Posso Ltd as per the criteria set out in Section 7.2.</p>
                <p><strong>7.4</strong> Posso Ltd reserves the right to cancel the User’s ‘Free Subscription’ by giving a thirty (30) days written notice, should this Quotation become financially unfeasible for Posso Ltd to support.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">8. Customer Support Services</h2>
                <p><strong>8.1</strong> All queries, requests and/or issues shall be directed to the Company Customer Support Team for review. The Customer Support Team, which includes the Technical Support Team, is operational from 8am to 8pm. In the event of any unforeseen disruption to the telephone and/or Internet connection with the Customer Support Team, the operation times may be reduced. The Company shall endeavour to minimise the effect of any such disruption onto the Customer Support Team operations.</p>
                <p><strong>8.2</strong> The Company uses an internal ticketing system across all support channels. All data collected via the ticketing system shall only be used for ticket prioritisation and producing reports for internal management and improvements. Any data used for internal reports shall be anonymised first. No data shall be distributed to any third party without prior consent from the User.</p>
                <p><strong>8.3</strong> The customer support channels available to the User shall be dependent upon the User’s subscription level and detailed within the Quotation. In the unlikely event that a particular support channel experiences technical difficulty and becomes temporary unavailable, the User shall attempt to contact the Customer Support Team via a different support channel.</p>
                <p><strong>8.4</strong> The User shall receive technical support in case of any issues with the Company’s software and or hardware within 24 hours of sending a request through telephone or email at support@posso.uk . For more complex issues, the request will be passed to our second line support team for resolution within 72 hours of the initial User’s request. In the unlikely event that the Technical Support Team encounters a new issue not dealt with before, the Company shall endeavour to keep the User informed on the expected timeframe for resolution and keep any disruption to the Services functionality to a minimum.</p>
                <p><strong>8.5</strong> Telephone technical support (0808 175 3956) is available to the User free of charge for the first thirty (30) days of their license subscription. Should the User require telephone technical support for longer that the first thirty (30) days of their license subscription, this shall be charged as an additional cost to the User’s monthly/annual subscription OR shall be included in the Quotation.</p>
                <p><strong>8.6</strong> Remote training on the use of the Cloud services can be provided upon request by the User, depending on reasonable timeframes and availability of Company engineers. Repeat training may be charged at an additional cost to the User. Any such cost and payment process shall be communicated to the User in advance.</p>
                <p><strong>8.7</strong> The Company does not offer on-site visits to the User’s locations as part of our technical support services. All technical support provided by the Company is on a remote basis only.</p>
                <ul className="list-disc pl-8">
                    <li><strong>8.7.1</strong> The User shall be required to assist with troubleshooting any technical issues while being guided by an engineer remotely.</li>
                    <li><strong>8.7.2</strong> Should any troubleshooting require additional time for resolving, the User shall be given the option to proceed with the troubleshooting at a time more convenient to the User.</li>
                    <li><strong>8.7.3</strong> Should the User be required to provide remote access to their devise(s) and/or screen share with a technical support engineer, the User shall be responsible for ensuring all sensitive data is closed on their devise before remote access and/or screen share begins.</li>
                </ul>
                <p><strong>8.8</strong> The Company Customer Support Team is currently based in UK and Pakistan. This location is subject to change based on the Company’s sole discretion. Posso Ltd shall review the Customer Support Team’s location as deemed needed by the Company. The Company shall not be required to obtain the User’s consent should the Company decide to move the Customer Support Team to a new location.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">9. Third Party Licensing, Tools and Integrations</h2>
                <p><strong>9.1</strong> The Software is developed in .Net Framework, .Net Core, PHP, Angular, HTML, Microsoft SQL Server, JavaScript , CSS ,Cordova, Android and a number of other software tools. These are currently license-free; therefore, no software license is required for the users. In the event that any third-party software used becomes paid, the User shall subscribe to it or pay additional fees to the Company to cover the necessary license fees.</p>
                <p><strong>9.2</strong> The Company has integrated Google Maps API to find addresses with a postcode. These address lookups are useful while taking orders, registering customers, loyalty management etc. The Company has no control over these records; therefore, it does not hold any responsibility or liability for the accuracy of such records.</p>
                <p><strong>9.3</strong> To enhance the Software usage, the company has integrated third party tools such as Deliveroo, MailChimp, Uber and many other. In the event that the User wants to use the services from any integrated third party tools, they have to subscribe to services directly from the provider. The Company does not hold any responsibility for pricing, tool-performance and disputes related to third party tools. Should the User already have a subscription with any of the integrated third party tools, the User may sync their third part account with the Software.</p>
                <p><strong>9.4</strong> Third party tools and/or integrations may change with or without prior notice to Posso Ltd and/or the User. The Company shall not be held liable by the User for any loss of profits, business, goodwill, use, data or other intangible and tangible losses resulting from the withdrawal of any third party tools and/or integrations with or without prior notice.</p>
                <p><strong>9.5</strong> The User can request the Company to provide a list of all third-party tools and integrations at any time.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">10. Card Processing</h2>
                <p><strong>10.1</strong> The Company’s Software supports Card Processing with certain partners approved by Posso Ltd, including but not limited to First Data, PaymentSense, and the User acknowledges and agrees that using any form of Card Processing is at the User’s own risk.</p>
                <p><strong>10.2</strong> It should be noted that Posso Ltd is not a Card Processor, rather merely an integrator of such card processing tools.</p>
                <p><strong>10.3</strong> Card Processing can only be activated when the User enters their login credentials (merchant key) onto the POS terminal.</p>
                <p><strong>10.4</strong> Posso Ltd is not responsible for any issues with the merchant card terminal, including, but not limited to, fraudulent transactions and bank charge backs.</p>
                <p><strong>10.5</strong> The Posso Ltd Technical Support team cannot assist with any card processing issues, including, but not limited to, fraudulent transactions, bank charge backs and login issues. The User shall direct such issues to their bank/merchant card provider.</p>
                <p><strong>10.6</strong> Should the User wish to use online ordering, and/or contactless table ordering, and/or self-checkout ordering systems provided by Posso Ltd, the User must choose one card processing provider from the list of Posso Ltd approved partners. The User can request the Company to provide a list of all integrated card processing providers at any time.</p>
                <p><strong>10.7</strong> Company card processing partners may change from time to time or withdraw integration with or without prior notice. In such cases, the customer shall need to switch to another integrated provider to continue using Posso Ltd services for online ordering, and/or contactless table ordering, and/or self checkout ordering, etc.</p>
                <p><strong>10.8</strong> Should the User work with a Card Processor not integrated into Company’s EPOS Software, the User shall need to manually enter all payment details onto the merchant card terminal.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">11. Hardware Refunds Policy</h2>
                <p><strong>11.1</strong> Upon submitting your order details, you are making an offer to us to purchase the item(s) you have specified in your order form. We reserve the right to refuse your order should it be necessary. We will notify you if this is the case and return any payment that you have made;</p>
                <p><strong>11.2</strong> You must notify us immediately if you decide to cancel your order, preferably by phone, and quote your order number.</p>
                <ul className="list-disc pl-8">
                    <li><strong>11.2.1</strong> If no delivery has been dispatched yet, no cancellation fee applies and you will be issued a full refund. If the order has been dispatched for delivery already, your delivery cancellation request will be refused and you will need to refer to the process detailed in Section 11.6</li>
                    <li><strong>11.2.2</strong> If the cancellation was made in time and once we have accepted your delivery cancellation request, we will refund or re-credit your payment card with the full amount within fourteen (14) days, which includes the initial delivery charge (where applicable).</li>
                </ul>
                <p><strong>11.3</strong> If we can only do a split delivery (not all items from the order are available at the same time), our staff shall inform you of the expected date for delivery of the missing items. You have the right to refuse a split delivery before the order is dispatched and wait for all items to become available at the same time, or request to cancel your order and get a refund.</p>
                <p><strong>11.4</strong> In the unlikely event that we deliver a wrong item of hardware, you have the right to either reject the delivery of the wrong item and you shall be fully refunded for the missing item; or request for us to replace the incorrect item with the item that you ordered, in which case, we shall send you the correct one as soon as possible.</p>
                <p><strong>11.5</strong> We shall be happy to exchange or refund any item that has been damaged in transit while we are delivering to you.</p>
                <p><strong>11.6</strong> Posso Ltd operates a “7 Days Money Back Guarantee” policy.</p>
                <ul className="list-disc pl-8">
                    <li><strong>11.6.1</strong> Should you change your mind and wish to return your Hardware order, the Company shall issue a full refund for any undamaged items returned within seven (7) days of delivery, minus any delivery charges.</li>
                    <li><strong>11.6.2</strong> The Company reserves the right to refuse a full or partial refund if:</li>
                    <ul className="list-disc pl-8">
                        <li><strong>11.6.2.1</strong> any item is not returned in its original packaging; or</li>
                        <li><strong>11.6.2.2</strong> the goods are in a damaged condition (any damaged equipment will be charged at full cost); or</li>
                        <li><strong>11.6.2.3</strong> the goods are not returned within seven (7) days of delivery.</li>
                    </ul>
                </ul>
                <p><strong>11.7</strong> For any other formal complaint with a genuine reason, you have seven (7) days from the day of delivery to request a refund, subject to our discretion and acceptance of the complaint.</p>
                <p><strong>11.8</strong> In the event of a return, any relevant refunds, credit notes or exchanges can only be made to the payment card account or the business/person that made the order originally.Debit/credit card payment refunds can take up to twenty-eight (28) days to process, even if you contact us immediately after placing your order to cancel. This processing time is beyond our control and we apologise for the inconvenience caused.</p>
                <p><strong>11.9</strong> Any amounts paid for onsite installations, product imports, support payments, postage, module integrations, repair and labour costs are non-refundable.</p>
                <p><strong>11.10</strong> All costs with respect to Software sales and license subscriptions are excluded from the standard returns policy due to the considerable costs in configuration, personalization, training, and installation. These items are strictly non-refundable.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">12. Hardware Warranty Returns Process</h2>
                <p><strong>12.1</strong> The User reserves the right to request a warranty return, by contacting the Customer Support Team, should the User feel the equipment provided by Posso Ltd is ‘not fit for purpose’ within the one (1) year basic manufacturer’s warranty.</p>
                <p><strong>12.2</strong> The Company shall endeavour to obtain proper reasons as to why the User feels the product is ‘not fit for purpose’ and attempt to reasonably resolve any issues upon remote troubleshooting.</p>
                <p><strong>12.3</strong> Should the issues not be resolved remotely, the Company shall request for the User to send, via a courier service, the faulty hardware to a nominated address for repair. The User shall pack the hardware in appropriate packaging to avoid any damage in transit. The Company reserves the right to charge the User for any damage caused in transit due to poor packaging.</p>
                <p><strong>12.4</strong> Once the hardware is repaired, the Company shall post the repaired hardware back to the User. Should the fault be non-repairable, the Company shall send the User a replacement of the faulty hardware. Any replacement hardware may be a refurbished item.</p>
                <p><strong>12.5</strong> If the item returned is found to be in a working condition but in a poor and unreasonable state of cleanliness, the User will be billed for cleaning at a fixed rate of £50per item.</p>
                <p><strong>12.6</strong> Warranty refunds may only be offered by the Company after all endeavours have been made by the Company to resolve any arising issue/fault and no reasonable replacement equipment is available.</p>
                <p><strong>12.7</strong> The company cannot process a warranty refund of hardware due to any of the following reasons:</p>
                <ul className="list-disc pl-8">
                    <li><strong>12.7.1</strong> The User or staff not understanding or using the system properly; or</li>
                    <li><strong>12.7.2</strong> Lack of compatibility with third-party items/systems; or</li>
                    <li><strong>12.7.3</strong> The equipment has been configured, personalized and/or used; or</li>
                    <li><strong>12.7.4</strong> The product is a surplus to the User’s requirements; or</li>
                    <li><strong>12.7.5</strong> Operational problems arising from the User’s unstable or insufficient internet connection; or</li>
                    <li><strong>12.7.6</strong> The User has accidentally damaged the item after delivery; or</li>
                    <li><strong>12.7.7</strong> The User has misused the item and damaged it; or</li>
                    <li><strong>12.7.8</strong> The User has tried to open or tamper with the hardware in any way; or</li>
                    <li><strong>12.7.9</strong> Any environmental problems that are out of the Company’s control; or</li>
                    <li><strong>12.7.10</strong> The User’s business goes bankrupt.</li>
                </ul>
                <p><strong>12.8</strong> The Company does not offer on-site visits to the User’s location as part of our warranty repair process. All technical support provided by the Company is on a remote basis.</p>
                <p><strong>12.9</strong> Hardware repairs outside the one (1) year basic manufacturer’s warranty could be carried out at an additional cost to the User. Any such cost shall be agreed by the Company and the User, prior to any work being carried out.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">13. Formal Complaints Procedure</h2>
                <p><strong>13.1</strong> Posso Ltd is committed to providing a quality service for its customers and operating in an open, accountable and respectful way. If you are unsatisfied with any part of our service, please contact us immediately via telephone or email. The Company shall endeavour to resolve any issues within reasonable time. The Company shall use the following Complaints Procedure with regards to any issues not related to hardware malfunctioning:</p>
                <ul className="list-disc pl-8">
                    <li><strong>13.1.1</strong> Stage 1 – If you are unable to resolve an issue informally, you should contact us directly in writing via email or post and give us a chance to put things right. In your contact email/letter to us, you should set out the details of your complaint, the resulting consequences you have faced, and the remedy that you seek. You can expect your complaint to be acknowledged within five (5) working days of receipt and you should get an official response within twenty (20) working days. Our contact details can be found on the ‘Contact Us’ part of our Posso Ltd Website /contact</li>
                    <li><strong>13.1.2</strong> Stage 2 – If you are not satisfied with the initial response to the complaint, then you can write to the Chief Executive Officer (CEO) via email or post and ask for a review of your complaint and response received. You can expect the CEO to acknowledge your request within five (5) working days of receipt and a response within twenty (20) working days. Posso Ltd aims to resolve every issue as quickly as reasonable possible. However, certain issues may be more complex and, therefore, may require more time for a thorough investigation. If an issue requires further investigation, you will receive details of what steps are being taken in investigating the complaint, in what timescales an official response can be expected and from whom.</li>
                    <li><strong>13.1.3</strong> Final Stage – If you are not satisfied with the subsequent reply and action taken by the CEO, then you have the option of writing to any of the following, depending on the nature of your complaint: https://www.citizensadvice.org.uk/consumer/get-more-help/if-you-need-more-help-about-a-consumer-issue</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">14. Cancellation of License Subscription</h2>
                <p><strong>14.1</strong> The User may request to cancel their license subscription subject to a thirty (30) days’ notice to Posso Ltd by contacting the Customer Support Team via email or telephone.</p>
                <p><strong>14.2</strong> Should the User’s billing cycle fall during the thirty (30) days’ notice period, a full subscription shall be charged. Once the subscription is cancelled, a refund will be issued on a pro-rota basis for any period covered by the subscription past the termination date.</p>
                <p><strong>14.3</strong> During the thirty (30) days’ notice of subscription cancellation, the User shall download all data stored on the Cloud Software for their account. After the license subscription is cancelled, all account data will be permanently deleted. There is no possible way to retrieve deleted data.</p>
                <p><strong>14.4</strong> The User reserves the right to withdraw their cancelation request within the thirty (30) days’ notice period and continue the licence subscription without any obstructions.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">15. Tax Calculations</h2>
                <p><strong>15.1</strong> Posso Ltd calculates tax on each line which is sold in a transaction as a common practice in most software.</p>
                <p><strong>15.2</strong> The User might see a difference in total tax when calculating tax, for example, if you consider an item sold at £10.00 inclusive 20% tax, this will result in a tax of £1.67p which is rounded to two decimal point.</p>
                <p><strong>15.3</strong> Discounts applied to tax on a transaction are taken equally from all items in the transaction.</p>
                <p><strong>15.4</strong> Posso Ltd is not liable for any incorrect tax calculations. It is the User’s responsibility to take professional tax advice before submitting returns to tax and other governing authorities.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">16. Company Income from Third Party Referrals</h2>
                <p><strong>16.1</strong> The User acknowledges and accepts that the Company will be receiving financial incentives/commission from third party providers such as leasing, finance, card processing, software tools, delivery partners, hardware tools and other providers for referring the User.</p>
                <p><strong>16.2</strong> The Company shall not be notifying or disclosing to the User any such financial incentives/commission figures at any time.</p>
                <p><strong>16.3</strong> The User acknowledges and accepts that the Company reserves full rights on receiving and retaining such financial incentives.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">17. Intellectual Property Rights</h2>
                <p><strong>17.1</strong> The User acknowledges and agrees that Posso Ltd will hold all intellectual property rights in the software and hardware including, but not limited to, copyright and trademark rights.</p>
                <p><strong>17.2</strong> Under the terms of this license, the Company grants the User non-exclusive, non-transferable, and time-limited rights to use the software, interfaces, content, documentation and any data, whether in read only memory, on any other media or in any other form.</p>
                <p><strong>17.3</strong> The User undertakes not to challenge or do anything inconsistent with such ownership.</p>
                <p><strong>17.4</strong> The User grants the Company, by using the software, a royalty-free, irrevocable, perpetual license to use information and/or data collected from the User’s activity on the Software, provided that the information or data is anonymised before use. Other than this right, the Company claims no intellectual property rights in relation to the information or contents the User inputs into the Software.</p>
                <p><strong>17.5</strong> The User may provide the Company with feedback, alternative options, comments or suggestions on the Software, and the User agrees that the Company will be free to use, modify and incorporate such suggestions without any obligation to the User. All intellectual property rights for such modifications remain with Posso Ltd .</p>
                <p><strong>17.6</strong> The Company retains ownership of the software itself and reserves all rights not expressly granted to the User.</p>
                <p><strong>17.7</strong> The User is not permitted to assign, sub-license, and novate or transfer these Terms or any of the rights licensed to them.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">18. Unauthorised, Malicious and/or Illegal Use</h2>
                <p><strong>18.1</strong> The Company does not authorise the User to do any functionality changes or integrations into the Company Software without prior consent.</p>
                <p><strong>18.2</strong> The User must not:</p>
                <ul className="list-disc pl-8">
                    <li><strong>18.2.1</strong> Use the Software in any unlawful manner, for any unlawful or fraudulent purpose, or in any manner inconsistent with these Terms; or</li>
                    <li><strong>18.2.2</strong> Upload any malicious or unlawful content and/or data onto the Software; or</li>
                    <li><strong>18.2.3</strong> Infringe on the intellectual property rights, or those of any third party, in relation to their use of the Software; or</li>
                    <li><strong>18.2.4</strong> Tamper with or use the Software in a way that could damage, disable, overburden, impair or compromise the Company’s systems or security, or interfere with other users’ systems or security; or</li>
                    <li><strong>18.2.5</strong> Collect any information or data from the Software and/or Hardware or systems; or</li>
                    <li><strong>18.2.6</strong> Disclose or distribute information relating to another user of the Software to any third party; or</li>
                    <li><strong>18.2.7</strong> Use any other User’s information for any marketing purposes unless they have obtained the User’s express permission to do so; or</li>
                    <li><strong>18.2.8</strong> Access or register user logins via any automated methods.</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">19. Limitation of Liability</h2>
                <p><strong>19.1</strong> Nothing in these Terms excludes or limits our liability for:</p>
                <ul className="list-disc pl-8">
                    <li><strong>19.1.1</strong> Death or personal injury caused by our negligence.</li>
                    <li><strong>19.1.2</strong> Fraud or fraudulent misrepresentation; and</li>
                    <li><strong>19.1.3</strong> Any matter in respect of which it would be unlawful for us to exclude or restrict our liability.</li>
                </ul>
                <p><strong>19.2</strong> Nothing in these terms and conditions will restrict any of your statutory rights.</p>
                <p><strong>19.3</strong> The Company shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to, damage; or</p>
                <ul className="list-disc pl-8">
                    <li><strong>19.3.1</strong> The use or the inability to use the Software, hardware (in whole or in part) or any technical malfunctions; or</li>
                    <li><strong>19.3.2</strong> The unauthorized access to, or alteration of, your communications or data; or</li>
                    <li><strong>19.3.3</strong> The cost of procurement of substitute goods and services; or</li>
                    <li><strong>19.3.4</strong> The conduct or actions of any third party regarding the Software; or</li>
                    <li><strong>19.3.5</strong> Any other matter relating to the Software.</li>
                </ul>
                <p><strong>19.4</strong> The Company does not accept any liability for any delays, failures, errors or omissions or loss of transmitted information, viruses or other contamination or destructive properties transmitted to you or your computer system via our Software.</p>
                <p><strong>19.5</strong> Force majeure: We will not be deemed to be in breach of contract or of these terms and conditions as a result of any delay in our performance or failure to perform our obligations if that delay or failure to perform is due to any cause or circumstance beyond our reasonable control including, but not limited to, all overwhelming and unpreventable events caused directly and exclusively by forces of nature that can be neither anticipated, nor controlled, nor prevented by the exercise of prudence, diligence, and care, including but not limited to: war, labour/staff disputes, riot, civil commotion; compliance with any law or governmental order, rule, regulation or direction and acts of third parties.</p>
                <p><strong>19.6</strong> If we have contracted to provide orders to more than one customer and are prevented from fully meeting our obligations to you by reason of an event of Force Majeure, we may decide at our absolute discretion which orders we will fill and to what extent. Nothing in these Terms obliges us to prioritise any order placed by the User in an event of Force Majeure.</p>
                <p><strong>19.7</strong> For the avoidance of doubt, nothing in Clause 19.5 shall excuse the Customer from any payment obligations under this agreement.</p>
                <p><strong>19.8</strong> The products sold by Posso Ltd are provided for commercial use only. Accordingly, we do not accept liability for any indirect loss, consequential loss, loss of data, loss of income or profit, loss of damage to property and/or loss from claims of third parties arising out of the use of the Software and/or Hardware or for any products or services purchased from us.</p>
                <p><strong>19.9</strong> We have taken all reasonable steps to prevent Internet fraud and ensure any data collected from you is stored as securely and safely as possible. However, we cannot be held liable in the unlikely event of a breach in our secure computer servers or those of third parties.</p>
                <p><strong>19.10</strong> No delay or failure on our part to enforce our rights or remedies under the Agreement shall constitute a waiver on our part of such rights or remedies unless such waiver is confirmed in writing.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">20. Representation</h2>
                <p><strong>20.1</strong> The User has the due right and power to enter into this Agreement. Entering into this Agreement will not cause a breach of any agreement the User has with a third party.</p>
                <p><strong>20.2</strong> By assenting to this Agreement the User represents and warrants that they have the full right, power and authority to access and use the Software and, to the extent necessary, that they have obtained all necessary corporate or other authorizations or consents to access and use the Services. Thus, if you are an individual (e.g., employee or consultant) acting on behalf of an Organization, you represent and warrant that you have obtained all necessary authorizations or consents (i.e., you must be an authorized representative) to accept these Terms on behalf of such Organization so that, in addition to yourself, such Organization is bound by these Terms.</p>
                
                <h2 className="text-2xl font-bold text-slate-100 pt-4">21. Severance</h2>
                <p><strong>21.1</strong> If any part of these Terms and Conditions is found to be invalid by a court of Law, tribunal or another forum of competent jurisdiction, or otherwise rendered unenforceable, that decision shall not invalidate or void the other parts of this agreement. An amendment of these Terms and Conditions shall be deemed to have been undertaken by any modification or severing parts of the Terms and Conditions as necessary to render them valid, legal and enforceable while preserving their sole purpose. Or, if this is not possible, by substituting another provision that is valid, legal and enforceable that gives equivalent effect to the parties’ intent.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">22. Termination of Agreement</h2>
                <p><strong>22.1</strong> The Company may decide to cease providing all parts of the Software at any time, for any foreseen or unforeseen reasons, including, but not limited to, cessation of trading or bankruptcy. Nothing in these Terms is to be taken as a guarantee that the Software will always be available, either in its current form or an updated version.</p>
                <p><strong>22.2</strong> This Agreement may be terminated by either Party subject to a thirty (30) days’ written notice to the other Party via email.</p>
                <p><strong>22.3</strong> Should the User’s billing cycle fall during the thirty (30) days’ notice period, a full subscription shall be charged. Once the subscription is terminated, a refund will be issued on a pro-rota basis for any period covered by the subscription past the termination date.</p>
                <p><strong>22.4</strong> During the thirty (30) days’ notice of termination, the User shall download all data stored on the Cloud Software for their account. After the license subscription is cancelled and this Agreement terminated, all account data will be permanently deleted. There is no possible way to retrieve deleted data.</p>
                <p><strong>22.5</strong> The User reserves the right to withdraw their termination request within the thirty (30) days’ notice period and continue the licence subscription without any obstructions.</p>
                <p><strong>22.6</strong> Either Party (the “Terminating Party”) may terminate this Agreement immediately if:</p>
                <ul className="list-disc pl-8">
                    <li><strong>22.6.1</strong> The other Party files for bankruptcy, receivership, insolvency, reorganisation, dissolution, liquidation or similar proceedings; or</li>
                    <li><strong>22.6.2</strong> The other Party had a bankruptcy, receivership, insolvency, reorganisation, dissolution, liquidation or similar proceedings proceeding instituted against it and such proceeding is not dismissed within 60 days; or</li>
                    <li><strong>22.6.3</strong> The other Party makes an assignment for the benefit of its creditors or an offer of settlement, extension or composition to its creditors or an offer of settlement, extension or composition to its creditors generally; or</li>
                    <li><strong>22.6.4</strong> A trustee, conservator, receiver or similar fiduciary is appointed for that party or substantially all of the other Party’s assets; or</li>
                    <li><strong>22.6.5</strong> The other Party commits any fraud or misrepresentation or engages in any act or omission that may damage the reputation, business or goodwill of the Terminating Party; or</li>
                    <li><strong>22.6.6</strong> The other Party breaches any of the provisions of this Agreement.</li>
                </ul>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">23. Law and Jurisdiction</h2>
                <p><strong>23.1</strong> Any dispute arising out of or in connection with this Agreement shall to the extent possible be settled amicably by negotiation between the Parties within thirty (30) days from the date of written notice by either party of the existence of such a dispute. If the Parties do not reach settlement within a period of thirty (30) days, they will attempt to settle it by mediation before resorting to litigation. The parties shall attempt to agree upon the appointment of a mediator, upon receipt, by either of them, of a written notice to concur in such appointment. Should the mediation fail, in whole or in part, either party may decide to take the dispute or claim to court for final decision.</p>
                <p><strong>23.2</strong> These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including non-contractual disputes or claims) shall be governed by and construed in accordance with the law of the England and Wales</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">24. Entire Agreement</h2>
                <p><strong>24.1</strong> This Agreement constitutes the entire Agreement between the Company and the User and supersedes any prior written or oral agreement with respect to the subject matter hereof.</p>

                <h2 className="text-2xl font-bold text-slate-100 pt-4">25. Posso Ltd details</h2>
                <p>Posso Ltd is a company incorporated in England and Wales with registered number 11813595 whose registered address is 57 The Oval, New Walk, Leicester LE1 7EA. You can contact Posso Ltd by email on info@posso.uk or by phone on 0808 175 3956.</p>
            </div>

            <div className="mt-12">
              <Button asChild>
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
