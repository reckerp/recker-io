import React from 'react'
import { Heading } from '@/components'

const Imprint = () => {
  
  return (
    <div className="margin">
      <Heading title="Imprint" subtitle="Legals" />
      <br />
      <h2 className='h3__syne'>According to &sect; 5 TMG</h2>
      <p className='p__basic'>Paul Recker<br />
        Erlenweg 8<br />
        41379 Brüggen<br />
        Germany</p>
      <br />
      <h2 className='h3__syne'>Contact</h2>
      <p className='p__basic'>Phone: +49 (0) 175 1730621<br />
        E-Mail: paul@recker.io</p>
      <br />
      <p className='p__basic'>Source:&nbsp;
        <a className='a__basic' href="https://www.e-recht24.de/impressum-generator.html">
          e-recht24.de
        </a>
      </p>

     <h1 className='h1__syne' style={{marginTop: '3rem'}}>Privacy Policy</h1> 
     <p className='p__basic'>
        With the following data protection declaration, we would like to inform you about the types of your personal data (hereinafter also referred to as "data") that we process, for what purposes and to what extent. The data protection declaration applies to all processing of personal data carried out by us, both as part of the provision of our services and in particular on our websites, in mobile applications and within external online presences, such as our social media profiles. 
     </p> <br />
     <p className='p__basic'>
        <b>Relevant legal bases according to the GDPR:</b> The following is an overview of the legal basis of the GDPR on the basis of which we process personal data. Please note that in addition to the provisions of the GDPR, national data protection regulations may apply in your or our country of residence or domicile. If, in addition, more specific legal bases are relevant in individual cases, we will inform you of these in the data protection declaration.
        <br />
       <b>National data protection regulations in Germany:</b> In addition to the data protection regulations of the GDPR, national regulations on data protection apply in Germany. These include, in particular, the Act on Protection against Misuse of Personal Data in Data Processing (Federal Data Protection Act - BDSG). In particular, the BDSG contains special regulations on the right to information, the right to erasure, the right to object, the processing of special categories of personal data, processing for other purposes and transmission, as well as automated decision-making in individual cases, including profiling. Furthermore, state data protection laws of the individual federal states may apply.
     </p> <br /> 
     <h2 className='h3__syne'>
        Processing of personal data
     </h2>
     <p className='p__basic'>The operator of this personal website places the utmost importance on the protection of your personal data and privacy. We want to assure you that no personal data is collected through this website, whether by external service providers or cookies.</p>
     <p className='p__basic'>Please note that this website is protected by Cloudflare security measures and is hosted on Vercel</p>
     <p className="p__basic">For information on how Cloudflare handles data, please refer to their <a className='a__basic' href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
     <p className="p__basic">For information on how Vercel handles data, please refer to their <a className='a__basic' href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</p>
     

     <br />
     <strong className="p__basic">1. Collection of Personal Data:</strong>
     <p className="p__basic">We do not collect any personal data from you. No information such as your name, email address, phone number, or similar data is gathered. Please be aware that data collection may occur through external services, such as Cloudflare or Vercel, which are utilized to enhance the performance and security of this website. For more detailed information on how Cloudflare and Vercel handles data, please consult their Privacy Policy.</p>

      <strong className="p__basic">2. Use of Cookies:</strong>
      <p className="p__basic">Our website does not use cookies to collect information about your visit or user behavior.</p>

      <strong className="p__basic">3. External Service Providers:</strong>
      <p className="p__basic">We do not collaborate with external service providers, such as Google Analytics, which process personal data on our behalf.</p>

      <strong className="p__basic">4. Data Security:</strong>
      <p className="p__basic">Although we do not collect personal data, we take appropriate measures to ensure the security and integrity of this website. We employ suitable security measures to protect the website from unauthorized access or misuse.</p>

      <strong className="p__basic">5. Changes to this Privacy Policy:</strong>
      <p className="p__basic">This privacy policy may be periodically updated to ensure compliance with applicable data protection regulations. Any changes will be published on this page, and it is your responsibility to regularly review this privacy policy.</p>
      <br />
      <h2 className='h3__syne'>Liability for External Links</h2>
      <p className='p__basic'>
        The operator of this website does not assume liability for external links or the content of linked websites. We provide links to other websites to offer you additional information and resources. However, it is your responsibility to ensure that you review the privacy and security policies of the linked websites. We cannot be held liable for the accuracy, timeliness, or legitimacy of the content on such linked pages. Clicking on external links is done at your own risk, and we recommend reading the respective liability terms of the linked websites.
      </p>
    </div>
  )
}

export default Imprint
