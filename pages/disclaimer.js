import React from 'react';
import { Heading, Paragraph, Anchor } from '@madebyconnor/bamboo-ui';

import { Split } from '../layouts/Split';
import Meta from '../components/Meta';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Page() {
  const title = 'Disclaimer';
  const subtitle = '';
  const image = {
    src: 'https://images.ctfassets.net/wgin2u9ggvsy/1rCrSbXDO4ECoKow2QKkyg/e068c16bb6e71eb6eae6a4befffe1418/aidan-meyer-129877.jpg',
    alt: 'A boy is writing into his journal on top of a mountain.',
  };
  return (
    <>
      <Meta
        title={title}
        description={subtitle}
        pathname="/disclaimer"
        index={false}
      />

      <Navigation />

      <Split title={title} subtitle={subtitle} image={image}>
        <Heading as="h2" size="l">
          Legal Disclosure
        </Heading>
        <Heading as="h3" size="m">
          Accountability for content
        </Heading>
        <Paragraph>
          {
            "The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality. According to statutory provisions, we are furthermore responsible for our own content on these web pages. In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity. Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act (TMG)."
          }
        </Paragraph>
        <Heading as="h3" size="m">
          Accountability for links
        </Heading>
        <Paragraph>
          {
            'Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.'
          }
        </Paragraph>
        <Heading as="h3" size="m">
          Copyright
        </Heading>
        <Paragraph>
          {`Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is
            punishable (§ 106 of the copyright law).`}
        </Paragraph>

        <Heading as="h2" size="l">
          Privacy Statement
        </Heading>

        <Heading as="h3" size="m">
          General
        </Heading>
        <Paragraph>
          {
            'Your personal data (e.g. title, name, house address, e-mail address, phone number, bank details, credit card number) are processed by us only in accordance with the provisions of German data privacy laws. The following provisions describe the type, scope and purpose of collecting, processing and utilizing personal data. This data privacy policy applies only to our web pages. If links on our pages route you to other pages, please inquire there about how your data are handled in such cases.'
          }
        </Paragraph>

        <Heading as="h3" size="m">
          Disclosure
        </Heading>
        <Paragraph>
          {
            'According to the Federal Data Protection Act, you have a right to free-of-charge information about your stored data, and possibly entitlement to correction, blocking or deletion of such data. Inquiries can be directed to the following e-mail address: '
          }
          <Anchor href="mailto:privacy@connorbaer.com">
            privacy@connorbaer.com
          </Anchor>
          {'.'}
        </Paragraph>
      </Split>
      <Footer />
    </>
  );
}
