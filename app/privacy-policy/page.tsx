import React from 'react'
import { Heading } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    robots: {
        index: false,
        follow: false,
        nocache: true,
    }
}

const Imprint = () => {

    return (
        <div className="margin legal-page">
            <Heading title="Privacy Policy" subtitle="Legals" />
            <br />
            <h2 className='h3__syne'>Preamble</h2>
            <p className='p__basic'>
                With the following data protection declaration, we would like to inform you about the types of your personal data (hereinafter also referred to as &quot;data&quot;) that we process, for what purposes and to what extent in the context of providing our application.

                The terms used are not gender-specific.
                <br /> <br />
                Status: October 18, 2023
            </p>

            <br />
            <h2 className='h3__syne'>Responsible</h2>
            <p className='p__basic'>
                Paul Recker <br />
                Erlenweg 8 <br />
                41379 Brüggen <br />
                Germany <br />
                <br />
                Mail - Address: <br />
                paul@recker.io
            </p>
            <br />
            <h2 className='h3__syne'>Types of data processed</h2>
            <ul className='list__basic'>
                <li>Usage data.</li>
                <li>Meta, communication and procedural data.</li>
            </ul>
            <br />
            <h2 className='h3__syne'>Categories of affected persons</h2>
            <ul className='list__basic'>
                <li>Users.</li>
            </ul>

            <br />
            <h2 className='h3__syne'>Processing purposes</h2>
            <ul className='list__basic'>
                <li>Security measures.</li>
                <li>Reach measurement.</li>
                <li>Profiles with user-related information.</li>
                <li>Provision of our online offer and user friendliness.</li>
                <li>Information technology infrastructure.</li>
            </ul>

            <br />
            <h2 className='h3__syne'>Relevant legal bases</h2>
            <p className='p__basic'>
                <strong>Relevant legal bases according to the DSGVO: </strong>In the following you will find an overview of the
                Legal basis of the DSGVO, on the basis of which we process personal data. Please note,
                that, in addition to the provisions of the DSGVO, national data protection provisions may apply in your or our country of residence or domicile.
                may apply. Furthermore, should more specific legal bases be relevant in individual cases, we will inform you of these in the
                privacy policy.
            </p>
            <br />
            <ul className='list__basic'>
                <li><strong>Consent (Art. 6 para. 1 p. 1 lit. a) DSGVO)</strong> - The data subject has given his/her consent
                    to the processing of personal data concerning him or her for a specific purpose or several
                    specific purposes given.</li>
                <li><strong>Rightful interests (Art. 6 para. 1 p. 1 lit. f) DSGVO)</strong> - The processing is necessary for the protection
                    legitimate interests of the controller or of a third party, unless the interests
                    or fundamental rights and freedoms of the data subject, which require the protection of personal data,
                    prevail.</li>
            </ul>
            <br />
            <p className='p__basic'>
                <strong>National data protection regulations in Germany: </strong>In addition to the data protection regulations of the DSGVO.
                national regulations on data protection apply in Germany. These include, in particular, the Act on Protection against
                Misuse of Personal Data in Data Processing (Federal Data Protection Act - BDSG). The BDSG contains
                special regulations on the right to information, the right to deletion, the right to object, the processing of
                processing of special categories of personal data, processing for other purposes, and the transmission and
                as well as automated decision-making in individual cases, including profiling. Furthermore
                State data protection laws of the individual federal states may also apply.
            </p>
            <br />
            <p className='p__basic'>
                <strong>Note on validity DSGVO and Swiss DSG: </strong>This data protection notice serves both the
                information according to the Swiss Federal Law on Data Protection (Swiss DSG) as well as according to the
                Basic Data Protection Regulation (DSGVO). For this reason, we ask you to note that due to the broader
                spatial application and comprehensibility, the terms of the DSGVO are used. In particular, instead of the terms used in the
                Instead of the Swiss DPA terms &quot;processing&quot; of &quot;personal data&quot;, &quot;overriding interest&quot; and &quot;particularly
                personal data worthy of protection&quot;, the terms &quot;processing&quot; of &quot;personal data&quot; and &quot;legitimate interest&quot; used in the DSGVO are used.
                data&quot; as well as &quot;legitimate interest&quot; and &quot;special categories of data&quot; are used. The legal meaning of the
                terms will, however, continue to be determined in accordance with the Swiss DPA within the scope of the applicability of the Swiss DPA.
            </p>
            <br />
            <h2 className='h3__syne'>Security measures</h2>
            <p className='p__basic'>
                We take appropriate technical and organizational measures in accordance with the legal requirements, taking into account the state of the art, the implementation costs and the type, scope, circumstances and purposes of the processing as well as the different probability of occurrence and severity of the risk to the rights and freedoms of natural persons, in order to ensure a level of protection appropriate to the risk.
            </p>
            <br />
            <p className='p__basic'>
                Measures include, in particular, ensuring the confidentiality, integrity and availability of data through
                controlling physical and electronic access to data, as well as the access, input, transfer, availability and segregation of data.
                access, input, disclosure, availability, and segregation. Furthermore, we have established procedures
                procedures in place to ensure the exercise of data subjects&apos; rights, the deletion of data, and the response to data
                of the data. Furthermore, we already take the protection of personal data into account during the development
                and selection of hardware, software and processes in accordance with the principle of data protection, through
                technology design and through data protection-friendly default settings.
            </p>
            <br />
            <p className='p__basic'>
                TLS/SSL encryption (https): In order to protect user data that is transmitted through our online services, we
                we use TLS/SSL encryption. Secure Sockets Layer (SSL) is the standard technology used to secure
                securing Internet connections by encrypting the data transferred between a website or app and a browser (or
                between two servers). Transport Layer Security (TLS) is an updated and more secure version of
                version of SSL. Hyper Text Transfer Protocol Secure (HTTPS) appears in the URL when a website is secured by an
                SSL/TLS certificate.
            </p>

            <br />
            <h2 className='h3__syne'>Transmission of personal data</h2>
            <p className='p__basic'>
                In the course of our processing of personal data, it happens that the data is transmitted to other entities,
                companies, legally independent organizational units or persons or disclosed to them.
                disclosed to them. The recipients of this data may include, for example, service providers commissioned with IT tasks or
                Providers of services and content that are integrated into a website. In such cases we observe
                legal requirements and, in particular, conclude appropriate contracts or agreements that serve to protect your data.
                protection of your data with the recipients of your data.
            </p>

            <br />
            <h2 className='h3__syne'>International data transfers</h2>
            <p className='p__basic'>
                Data processing in third countries: If we process data in a third country (i.e., outside the European Union (EU),
                European Economic Area (EEA)) or the processing takes place in the context of the use of third
                services of third parties or the disclosure or transfer of data to other persons, entities or companies, this will only be
                takes place, this will only be done in accordance with the legal requirements. If the level of data protection in the
                third country has been recognized by means of an adequacy decision (Art. 45 DSGVO), this serves as the basis for the
                data transfer. Otherwise, data transfers will only take place if the level of data protection is otherwise ensured,
                in particular through standard contractual clauses (Art. 46(2)(c) DSGVO), explicit consent or in the case of
                contractual or legally required transfer (Art. 49 (1) DSGVO). For the rest, we will inform you of the
                bases of the third country transfer in the case of the individual providers from the third country, whereby the
                Adequacy Decisions take precedence as bases. Information on third country transfers and available
                adequacy decisions can be found in the EU Commission&apos;s information offering.
                <br />
                EU-US Trans-Atlantic Data Privacy Framework: Im Rahmen des sogenannten &quot;Data Privacy Framework&quot; (DPF) hat die
                EU-Kommission das Datenschutzniveau ebenfalls für bestimmte Unternehmen aus den USA im Rahmen der
                Angemessenheitsbeschlusses vom 10.07.2023 als sicher anerkannt. Die Liste der zertifizierten Unternehmen als auch
                weitere Informationen zu dem DPF können Sie der Webseite des Handelsministeriums der USA unter <a
                    href="https://www.dataprivacyframework.gov/" target="_blank">https://www.dataprivacyframework.gov/</a> (in
                Englisch) entnehmen. Wir informieren Sie im Rahmen der Datenschutzhinweise, welche von uns eingesetzten
                Diensteanbieter unter dem Data Privacy Framework zertifiziert sind.
            </p>

            <br />
            <h2 className='h3__syne'>Rights of the persons concerned</h2>
            <p className='p__basic'>
                Data subjects&apos; rights under the DSGVO: As a data subject, you are entitled to various rights under the DSGVO which
                in particular from Art. 15 to 21 DSGVO:
            </p>
            <ul className='list__basic'>
                <li><strong>Right to object: You have the right, on grounds relating to your particular situation,
                    at any time against the processing of personal data concerning you, which is based on Art. 6 para.
                    1 lit. e or f DSGVO; this also applies to profiling based on these provisions.
                    profiling based on these provisions. If the personal data concerning you is processed for the purpose of direct advertising
                    you have the right to object at any time to the processing of personal data concerning you for the purpose of such
                    personal data for the purposes of such advertising; this also applies to profiling, insofar as it is
                    it is connected with such direct advertising.</strong></li>
                <li><strong>Right of withdrawal of consent:</strong> You have the right to withdraw consent at any time.
                    revoke.</li>
                <li><strong>Right of access:</strong> You have the right to request confirmation as to whether or not relevant
                    data are processed and to information about these data and to further information and copy of the data
                    according to the legal requirements.</li>
                <li><strong>Right to rectification:</strong> You have the right, in accordance with the law, to request the
                    completion of the data concerning you or the correction of incorrect data concerning you.
                    demand.</li>
                <li><strong>Right to erasure and restriction of processing:</strong> You have the right, in accordance with the
                    the right to demand that data relating to you be deleted immediately or, alternatively, in accordance with the
                    alternatively, in accordance with the statutory provisions, to demand restriction of the processing of the data.</li>
                <li><strong>Right to data portability:</strong> You have the right to request data concerning you, which you have provided to us
                    provided to us, in accordance with the legal requirements in a structured, common and
                    machine-readable format or to request its transfer to another responsible party.</li>
                <li><strong>Complaint to the supervisory authority:</strong> You have the right, without prejudice to any other
                    administrative or judicial remedy, the right to lodge a complaint with a supervisory authority,
                    in particular in the Member State of your habitual residence, your place of work or the place of the alleged
                    alleged infringement, if you consider that the processing of personal data relating to you infringes the
                    data about you is in breach of the provisions of the DSGVO.</li>
            </ul>


            <br />
            <h2 className='h3__syne'>Cookies use</h2>
            <p className='p__basic'>
                Cookies are small text files, or other memory tags, that store information on end devices and read information from the end devices.
                read information from the end devices. E.g. to store the login status in a user account, a shopping cart content in an
                an e-shop, the contents called up or functions used of an online offer. Cookies can
                be used for various purposes, e.g. for purposes of the functionality, security and convenience of online offers
                comfort of online offers as well as the creation of analyses of visitor flows.
                <br />
                <strong>Notes on consent: </strong>We use cookies in accordance with the law.
                Therefore, we obtain prior consent from users, except where this is not required by law
                is. In particular, consent is not required if the storage and reading of information, ie.
                cookies, are absolutely necessary in order to provide the user with a telemedia service that he or she has expressly requested.
                telemedia service (i.e. our online offer) that they expressly request. Among the absolutely necessary cookies
                generally include cookies with functions that are necessary for the display and operability of the online offer, for load
                load balancing, security, the storage of the preferences and choices of users or similar
                purposes related to the provision of the main and secondary functions of the online offer requested by the users.
                purposes related to the provision of the online offer requested by the users. The revocable consent will be clearly communicated to users
                and contains the information on the respective cookie use.
                <br />
                <strong>Notes on legal bases for data protection: </strong>On which legal basis for data protection.
                legal basis we process the personal data of users with the help of cookies, depends on whether we ask
                Ask users for consent. If users consent, the legal basis for the processing of your
                data is the declared consent. Otherwise, the data processed with the help of cookies is processed on the basis of
                of our legitimate interests (e.g. in the business operation of our online offering and the
                improvement of its usability) or, if this is done in the context of the fulfillment of our contractual obligations, if the use of cookies is required.
                if the use of cookies is necessary to fulfill our contractual obligations. To
                which purposes the cookies are processed by us, we clarify this in the course of this data protection declaration or
                in the context of our consent and processing procedures.
                <br />
                <strong>General information on revocation and objection (so-called &quot;opt-out&quot;):</strong>
                Users can revoke the consent they
                consent at any time and object to the processing in accordance with the legal requirements.
                object to the processing. For this purpose, users can, among other things, restrict the use of cookies in the settings of their browsers.
                (whereby this may also restrict the functionality of our online offer).
                <strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 p. 1 lit. f) DSGVO).
                Consent (Art. 6 para. 1 p. 1 lit. a) DSGVO).
                <br />

                <strong>Processing of cookie data on the basis of consent: </strong>We use a procedure for the
                Cookie Consent Management, in the context of which the consent of users to the use of cookies,
                or the processing operations and providers mentioned in the cookie consent management procedure.
                can be obtained as well as managed and revoked by the users. The declaration of consent is stored
                stored in order not to have to repeat the request and to be able to prove the consent in accordance with the legal obligation.
                legal obligation. The storage can be server-side and/or in a cookie
                (so-called opt-in cookie, or with the aid of comparable technologies), in order to assign the consent to a user
                user or his or her device. Subject to individual information on the providers of
                cookie management services, the following information applies: The duration of the storage of the consent can be up to
                two years. Here, a pseudonymous user identifier is formed and linked to the time of the
                consent, information about the scope of the consent (e.g., which categories of cookies and/or
                service providers) as well as the browser, system and end device used;
                <strong>Legal basis:</strong> Consent (Art. 6 para. 1 p. 1 lit. a) DSGVO).
            </p>

            <br />
            <h2 className='h3__syne'>Provision of the online offer and web hosting</h2>
            <p className='p__basic'>
                We process users&apos; data in order to provide them with our online services. For this purpose
                we process the user&apos;s IP address, which is necessary to transmit the content and functions of our online services to the user&apos;s
                to the browser or terminal device of the users.
            </p>
            <ul className='list__basic'>
                <li><strong>Types of data processed:</strong> Usage data (e.g. web pages visited, interest in content,
                    access times); meta, communication and procedural data (e.g. .IP addresses, time,
                    identification numbers, consent status).</li>
                <li><strong>Affected persons:</strong> users (e.g. .website visitors, users of online services).</li>
                <li><strong>Purposes of processing:</strong> Provision of our online offer and user friendliness;
                    Information technology infrastructure (operation and provision of information systems and technical
                    devices (computers, servers, etc.).). Security measures.</li>
                <li><strong>Legal basis:</strong> Legitimate interests (Art. 6 para. 1 p. 1 lit. f) DSGVO).</li>
            </ul>
            <p className='p__basic'>
                <strong>Further guidance on processing operations, procedures and services:</strong>
                <br />
                The access to our online offer is logged in the form of so-called
                so-called &quot;server log files&quot;. The server log files may include the address and name of the retrieved
                web pages and files, date and time of access, amount of data transferred, notification of successful access,
                browser type and version, the operating system of the user, referrer URL (the previously visited page) and, as a rule
                IP addresses and the requesting provider. Die Serverlogfiles können zum einen zu Zwecken der
                Sicherheit eingesetzt werden, z. B., um eine Überlastung der Server zu vermeiden (insbesondere im Fall von
                attacks, so-called DDoS attacks) and, on the other hand, to ensure the utilization of the servers and their stability.
                stability; the legal basis for this is Art. 6 para. 1 p. 1 lit. f) DSGVO.
                Log file information is stored for a maximum
                stored for a maximum of 30 days and then deleted or anonymized. Data whose further storage is required
                for evidentiary purposes are excluded from deletion until final clarification of the respective incident.
                excluded.
            </p>

            <br />
            <h2 className='h3__syne'>Web analysis, monitoring and optimization</h2>
            <p className='p__basic'>
                Web analytics (also referred to as &quot;reach measurement&quot;) is used to evaluate the flow of visitors to our
                online offer and may include behavior, interests or demographic information about the visitors, such as the
                age or gender, as pseudonymous values. With the help of reach analysis, we can, for example.
                recognize at what time our online offer or its functions or content are most frequently used or
                invite re-use. Likewise, we can understand which areas require optimization.
                <br />
                In addition to web analytics, we may also use testing procedures, for example, to test different versions of our
                online offer or its components and optimize them.
                <br />
                Unless otherwise stated below, profiles, i.e., data combined into one usage process, can be created for these purposes.
                data and information can be stored in a browser or in a terminal device and read from it.
                read from this. The information collected includes, in particular, websites visited and elements used there, as well as technical
                elements used there as well as technical data, such as the browser used, the computer system used as well as information about
                usage times. If users have consented to the collection of their location data from us or from the providers of the
                services we use, location data may also be processed.
                <br />
                <strong>PostHog: </strong>
                We use PostHog to measure and analyze the use of our online offer on the basis of a pseudonymous user identification number. PostHog processes data on our behalf to record user interactions on our website and provide us with analytics. This helps us understand how users interact with our website and improve the user experience.
                <br />
                PostHog uses cookies or similar recognition technologies to collect information about your use of our website. The data is processed on servers located in the European Union (EU), specifically using PostHog&apos;s EU-hosted cloud offering. This ensures that your data remains within the EU and is subject to the protections of the GDPR.
                <br />
                The data collected includes:
            </p>
            <ul className='list__basic'>
                <li>Usage data (e.g., pages visited, interactions with elements, session duration)</li>
                <li>Technical information (e.g., browser type, operating system, screen resolution)</li>
                <li>Referrer URLs (the previously visited page)</li>
                <li>IP addresses (which are anonymized)</li>
            </ul>
            <p className='p__basic'>
                We have configured PostHog to respect user privacy choices. If you decline cookies through our cookie banner, PostHog will not track your activities. 
                <br />
                For more information about PostHog&apos;s privacy practices, please visit: <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">https://posthog.com/privacy</a>
                <br />
                <strong>Legal basis:</strong> Consent (Art. 6 para. 1 p. 1 lit. a) DSGVO).
                <br />
                <strong>Opt-out possibility:</strong> You can opt out of the use of cookies by selecting the appropriate settings in your browser or by declining cookies in our cookie banner when you first visit our website.
            </p>

            <br />
            <h2 className='h3__syne'>Modification and update of the privacy policy</h2>
            <p className='p__basic'>
                We ask you to regularly inform yourself about the content of our privacy policy. We adapt the
                data protection statement as soon as changes in the data processing carried out by us make this necessary.
                make this necessary. We will inform you as soon as the changes require an act of cooperation on your part (e.g. consent)
                or other individual notification becomes necessary.
                If we provide addresses and contact information of companies and organizations in this privacy policy
                we ask you to note that the addresses can change over time and ask you to check the information before contacting us.
                to check the information before contacting us.
            </p>

            <br />
            <a className='a__basic' href="https://datenschutz-generator.de/"
                title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank"
                rel="noopener noreferrer nofollow">Generated with Datenschutz-Generator.de by Dr. Thomas Schwenke</a>

        </div>
    )
}

export default Imprint
