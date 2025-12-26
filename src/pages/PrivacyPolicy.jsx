import { Box, Container, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import '../styles/pages/privacy-policy.scss';

const PrivacyPolicy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Update document title
    document.title = 'Privacy Policy - SavoryOps';
    
    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Read SavoryOps Privacy Policy to understand how we collect, use, and protect your personal information. Learn about our data protection practices and your privacy rights.');
    
    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', 'privacy policy, data protection, privacy rights, data security, GDPR compliance, user privacy, SavoryOps privacy');
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
            Last Updated: September 28, 2025
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
              At SavoryOps, we are committed to protecting your privacy and ensuring the security of your information. This Privacy Policy explains our data practices when you use our comprehensive restaurant management SaaS platform. Our system consists of three main components: a web-based system for restaurant owners, a user app for customers, and an employee app for staff management. We implement strict data protection measures and use AWS cloud infrastructure to ensure your data remains secure and private.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Information We Collect
            </Typography>
            <Typography variant="body1" className="section-content">
              Our platform collects different types of information depending on which system you use. We collect only the data necessary to provide our services effectively:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Restaurant Owner Web System Data
              </Typography>
              <Typography variant="body1" className="section-content">
                • Business information (restaurant name, address, contact details)<br />
                • Branch details and locations<br />
                • Menu items, categories, and pricing information<br />
                • Staff profiles and role assignments<br />
                • Account credentials for secure access<br />
                • Business analytics and reporting data
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                User App Data
              </Typography>
              <Typography variant="body1" className="section-content">
                • User profile information (name, email, phone number)<br />
                • Order history and preferences<br />
                • Payment information (processed securely)<br />
                • Restaurant reviews and ratings<br />
                • Invoice download preferences<br />
                • Cash-on-hand payment details
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Employee App Data
              </Typography>
              <Typography variant="body1" className="section-content">
                • Employee profile information and role assignments<br />
                • Order management and completion data<br />
                • Payment processing information<br />
                • Work schedule and availability<br />
                • Performance and task completion records
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              App Permissions (User and Employee Apps)
            </Typography>
            <Typography variant="body1" className="section-content">
              Our mobile apps request certain device permissions to provide core functionality. Permissions are requested at runtime, are optional unless required for a feature you use, and can be changed anytime in your device settings.
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Camera (Scan QR Code)
              </Typography>
              <Typography variant="body1" className="section-content">
                • Purpose: Scan table QR codes to create orders and identify table numbers<br />
                • Data: Live camera stream used locally for scanning; we do not store raw camera footage<br />
                • Control: You can deny or disable camera access in device settings; scanning features will be unavailable without permission
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Photos / Gallery (Profile Image Upload)
              </Typography>
              <Typography variant="body1" className="section-content">
                • Purpose: Allow customers and employees to upload a profile photo from the device gallery<br />
                • Data: Only the image you select is uploaded; we do not access your entire gallery<br />
                • Control: You can deny or disable gallery access; profile image upload will be unavailable without permission
              </Typography>
            </Box>



            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Managing Permissions
              </Typography>
              <Typography variant="body1" className="section-content">
                • You can manage or revoke permissions in your device settings at any time<br />
                • Denying a permission only limits the related feature; the rest of the app remains usable
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              How We Use Your Information
            </Typography>
            <Typography variant="body1" className="section-content">
              We use the collected information solely to provide and improve our restaurant management services:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Service Provision
              </Typography>
              <Typography variant="body1" className="section-content">
                • Process orders and manage restaurant operations<br />
                • Provide secure access to your account and data<br />
                • Enable communication between customers, staff, and management<br />
                • Generate reports and analytics for business insights<br />
                • Process payments securely through encrypted channels
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                System Improvement
              </Typography>
              <Typography variant="body1" className="section-content">
                • Analyze usage patterns to improve platform functionality<br />
                • Enhance security measures and system performance<br />
                • Develop new features based on user needs<br />
                • Provide technical support and customer service
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Information Sharing and Disclosure
            </Typography>
            <Typography variant="body1" className="section-content">
              We are committed to protecting your privacy and do not sell, trade, or rent your personal information to third parties. We may share information only in the following limited circumstances:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Service Providers
              </Typography>
              <Typography variant="body1" className="section-content">
                • AWS (Amazon Web Services) for secure cloud hosting and data storage<br />
                • Payment processors for secure transaction processing<br />
                • All service providers are bound by strict confidentiality agreements
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Legal Requirements
              </Typography>
              <Typography variant="body1" className="section-content">
                • When required by law or legal process<br />
                • To protect our rights, property, or safety<br />
                • To prevent fraud or illegal activities
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Business Transfers
              </Typography>
              <Typography variant="body1" className="section-content">
                • In case of merger, acquisition, or sale of assets<br />
                • Users will be notified of any such changes
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Data Security
            </Typography>
            <Typography variant="body1" className="section-content">
              We implement comprehensive security measures to protect your data across all our systems:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Infrastructure Security
              </Typography>
              <Typography variant="body1" className="section-content">
                • AWS cloud infrastructure with enterprise-grade security<br />
                • End-to-end encryption for data transmission and storage<br />
                • Secure data centers with 99.99% uptime guarantee<br />
                • Regular security audits and vulnerability assessments<br />
                • Multi-factor authentication for all accounts
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Data Protection
              </Typography>
              <Typography variant="body1" className="section-content">
                • Separate databases and subdomains for each restaurant<br />
                • Role-based access controls for different user types<br />
                • Regular data backups with secure storage<br />
                • Advanced threat protection and monitoring
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Access Controls
              </Typography>
              <Typography variant="body1" className="section-content">
                • Restaurant owners: Full access to their business data<br />
                • Employees: Role-specific access (waiter, chef, head chef, cashier)<br />
                • Customers: Access only to their own orders and profile<br />
                • All access is logged and monitored for security
              </Typography>
            </Box>
          </Box>


          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Your Rights and Choices
            </Typography>
            <Typography variant="body1" className="section-content">
              You have comprehensive rights regarding your personal data and can exercise these rights at any time:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Access and Portability
              </Typography>
              <Typography variant="body1" className="section-content">
                • Request a copy of all your personal data<br />
                • Access your order history and transaction records<br />
                • Download your account information
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Correction and Updates
              </Typography>
              <Typography variant="body1" className="section-content">
                • Update your profile information at any time<br />
                • Correct inaccurate data through your account settings<br />
                • Modify business information and preferences<br />
                • Update payment and contact details
              </Typography>
            </Box>


            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Contact Information
              </Typography>
              <Typography variant="body1" className="section-content">
                To exercise any of these rights, please contact us through our official channels.<br />
                We will respond to your request within 30 days and may require identity verification for security purposes.
              </Typography>
            </Box>
          </Box>


          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Third-Party Services
            </Typography>
            <Typography variant="body1" className="section-content">
              We work with trusted third-party service providers to deliver our platform effectively:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Cloud Infrastructure
              </Typography>
              <Typography variant="body1" className="section-content">
                • AWS (Amazon Web Services) for secure cloud hosting<br />
                • Global data centers with enterprise-grade security<br />
                • Automatic scaling and high availability<br />
                • All data is encrypted and protected by AWS security measures
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Payment Processing
              </Typography>
              <Typography variant="body1" className="section-content">
                • Cash-on-hand payment system for secure transactions<br />
                • Local payment processing without external gateways<br />
                • Secure cash management and tracking<br />
                • No external payment data collection or storage
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Communication Services
              </Typography>
              <Typography variant="body1" className="section-content">
                • All communications are encrypted and secure<br />
                • No personal data is shared beyond what's necessary for service delivery
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Data Protection
              </Typography>
              <Typography variant="body1" className="section-content">
                • All third-party providers are bound by strict data protection agreements<br />
                • Regular security audits of all service providers<br />
                • No data is sold or shared for marketing purposes<br />
                • Compliance with international data protection standards
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              International Data Transfers
            </Typography>
            <Typography variant="body1" className="section-content">
              Our platform uses AWS global infrastructure to provide services worldwide. Your data is stored in secure data centers and may be transferred across international borders to provide our services. All data transfers are encrypted and comply with applicable data protection laws including GDPR and CCPA. We implement appropriate safeguards to protect your data during international transfers.
            </Typography>
          </Box>


          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" className="section-content">
              We may update this Privacy Policy to reflect changes in our services, legal requirements, or business practices:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Notification of Changes
              </Typography>
              <Typography variant="body1" className="section-content">
                • We will notify you of material changes via email or platform notification<br />
                • Updated policies will be posted on our website with the new effective date<br />
                • Significant changes will require your consent before implementation<br />
                • Minor updates will be communicated through our platform
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Your Rights
              </Typography>
              <Typography variant="body1" className="section-content">
                • You can review the current policy at any time on our website<br />
                • You may withdraw consent for new data processing activities<br />
                • You can request data deletion if you disagree with policy changes<br />
                • Continued use of our services constitutes acceptance of updated policies
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Contact Information
              </Typography>
              <Typography variant="body1" className="section-content">
                If you have questions about policy changes, please contact us through our official channels.<br />
                We are committed to transparency and will address your concerns promptly.
              </Typography>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;
