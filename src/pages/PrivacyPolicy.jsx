import { Box, Container, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import '../styles/pages/privacy-policy.scss';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="privacy-policy-page">
      <Container maxWidth="lg" className="privacy-policy-container">
        {/* Header */}
        <Box className="privacy-policy-header">
          <Typography variant="h2" component="h1" className="header-title">
            Privacy Policy
          </Typography>
          <Typography variant="h6" className="header-subtitle">
            Last Updated: September 26, 2025
          </Typography>
        </Box>

        <Divider className="section-divider" />

        {/* Content */}
        <Box className="privacy-policy-content">
          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Introduction
            </Typography>
            <Typography variant="body1" className="section-content">
              At SavoryOps, we are committed to protecting your privacy and ensuring the security of your information. This Privacy Policy explains our data practices when you use our modern restaurant management software. We do not collect any data related to your restaurant and business operations. We do not collect personal data for personal usage and will not share your data with third parties. Your data is secure with AWS cloud infrastructure.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Information We Collect
            </Typography>
            <Typography variant="body1" className="section-content">
              We do not collect any data related to your restaurant and business operations. We do not collect login credentials or any personal information:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                No Business Data Collection
              </Typography>
              <Typography variant="body1" className="section-content">
                We do not collect restaurant operational data, menu items, staff schedules, sales records, inventory data, customer orders, or any business-related information. Your restaurant and business data remains completely private and is not collected by our system.
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                No Login Credentials Collection
              </Typography>
              <Typography variant="body1" className="section-content">
                We do not collect login credentials, usernames, passwords, or any account information. No personal data, business data, or operational information is collected or stored by our system.
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                No Data Collection
              </Typography>
              <Typography variant="body1" className="section-content">
                We do not collect any data whatsoever. No personal browsing data, business data, tracking information, or any other data is collected by our system. Your privacy is completely protected.
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              How We Use Your Information
            </Typography>
            <Typography variant="body1" className="section-content">
              Since we do not collect any data whatsoever, we cannot use any information. We do not collect login credentials, restaurant data, business data, or any other information. Our software provides functionality without collecting or using any data from users.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Information Sharing and Disclosure
            </Typography>
            <Typography variant="body1" className="section-content">
              We do not share, sell, trade, or rent any data with third parties. Since we do not collect any data whatsoever, there is no data to share. Your information remains completely private and is never collected or shared under any circumstances.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Data Security
            </Typography>
            <Typography variant="body1" className="section-content">
              Our software infrastructure is secure with AWS (Amazon Web Services) cloud infrastructure. We implement enterprise-grade security measures including end-to-end encryption, secure data centers, regular security audits, and strict access controls. AWS provides industry-leading security standards with 99.99% uptime and advanced threat protection. Since we do not collect any data whatsoever, your privacy is completely protected.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Data Retention
            </Typography>
            <Typography variant="body1" className="section-content">
              Since we do not collect any data whatsoever, there is no data to retain. We do not collect login credentials, account information, or any other data. There is no data to delete or remove from our servers because we do not collect any data in the first place.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Your Rights and Choices
            </Typography>
            <Typography variant="body1" className="section-content">
              Since we do not collect any data whatsoever, there is no data to access, update, or delete. We do not collect login credentials, account information, or any other data. Your privacy is completely protected because we do not collect any data in the first place.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Cookies and Tracking Technologies
            </Typography>
            <Typography variant="body1" className="section-content">
              We use minimal cookies only for essential website functionality and security. We do not use tracking cookies, analytics cookies, or any cookies for data collection. Since we do not collect any data whatsoever, our focus is on providing secure software functionality without any data collection or invasive tracking.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Third-Party Services
            </Typography>
            <Typography variant="body1" className="section-content">
              Our services are built on AWS infrastructure for maximum security and reliability. We do not integrate with third-party analytics or tracking services. Since we do not collect any data whatsoever, there is no data to process or transfer. Any payment processing is handled securely through encrypted channels without data collection.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              International Data Transfers
            </Typography>
            <Typography variant="body1" className="section-content">
              Our software infrastructure is stored securely on AWS servers with global data protection standards. Since we do not collect any data whatsoever, there are no data transfers to manage. Our infrastructure is protected by AWS's enterprise-grade security measures regardless of location, ensuring your privacy and security.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Children's Privacy
            </Typography>
            <Typography variant="body1" className="section-content">
              Our restaurant management software is designed for business use only. We do not collect any information from children, personal data, login credentials, or any other data. Our focus is solely on providing secure software functionality without any data collection.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" className="section-content">
              We may update this Privacy Policy to reflect changes in our services or applicable laws. We will notify you of any material changes by posting the updated policy on our website. Our commitment to not collecting any data whatsoever and not sharing any data with third parties remains unchanged.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Contact Us
            </Typography>
            <Typography variant="body1" className="section-content">
              If you have any questions about this Privacy Policy or our data practices, please contact us at: Email: privacy@savoryops.com, Address: Dholakiya Nexus, Surat, Gujarat, India. We are committed to transparency and will respond to your inquiries promptly.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
