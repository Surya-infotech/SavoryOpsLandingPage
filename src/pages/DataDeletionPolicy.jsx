import { Box, Container, Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import '../styles/pages/privacy-policy.scss';

const DataDeletionPolicy = () => {
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
            Data Deletion Policy
          </Typography>
          <Typography variant="h6" className="header-subtitle">
            Last Updated: September 29, 2024
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
              At SavoryOps, we understand the importance of data privacy and your right to control your personal information. This Data Deletion Policy explains our single deletion option: you can delete your account, which permanently removes all data linked to that login account. This applies to customers and employees.
            </Typography>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Who Can Request Data Deletion
            </Typography>
            <Typography variant="body1" className="section-content">
              The following user types can request data deletion from our platform:
            </Typography>


            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Customer
              </Typography>
              <Typography variant="body1" className="section-content">
                Customers can request deletion of their entire account, which permanently removes all data linked to their login (profile, orders, preferences, reviews, and any associated records).
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Employee
              </Typography>
              <Typography variant="body1" className="section-content">
                Employees can request deletion of their entire account, which permanently removes all data linked to their login (employee profile, schedules, performance data, order handling history, and any associated records).
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Types of Data Deletion
            </Typography>
            <Typography variant="body1" className="section-content">
              We currently provide one deletion option:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Complete Account Deletion
              </Typography>
              <Typography variant="body1" className="section-content">
                • Permanently removes all personal information associated with your login account<br />
                • Deletes orders, reviews, preferences, and other data linked to your account<br />
                • Removes employee profile and related work activity (for employees)<br />
                • Cannot be undone — all account-linked data is permanently deleted
              </Typography>
            </Box>


          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Data Deletion Process
            </Typography>
            <Typography variant="body1" className="section-content">
              We provide a single option: delete your account. Before submitting the request, you must verify your account by entering your current password. After confirmation, all data linked to your login is permanently deleted and cannot be recovered.
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Verify Account (Required Before Submit)
              </Typography>
              <Typography variant="body1" className="section-content">
                • Enter your current account password to verify identity<br />
                • Read the non-recoverable deletion warning<br />
                • Confirm you understand all linked data will be deleted
              </Typography>
            </Box>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Submit Deletion Request
              </Typography>
              <Typography variant="body1" className="section-content">
                • Submit the request from your account settings after verification<br />
                • Review the final confirmation prompt and proceed to delete
              </Typography>
            </Box>



            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Deletion Execution
              </Typography>
              <Typography variant="body1" className="section-content">
                • Permanent deletion of all data linked to your login account<br />
                • Removal from backup systems within 90 days<br />
                • Secure data destruction following industry standards<br />
                • Deletion is irreversible and cannot be recovered<br />
                • Email or in-app confirmation of completion
              </Typography>
            </Box>
          </Box>

          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Timeline and Processing
            </Typography>
            <Typography variant="body1" className="section-content">
              Account deletion is processed immediately after you verify your password and submit the request. Some background cleanup tasks (like backup removal) complete shortly after.
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Immediate Processing
              </Typography>
              <Typography variant="body1" className="section-content">
                • Account data deletion: Immediate upon confirmation<br />
                • Session termination and access revocation: Immediate<br />
                • Backup cleanup: Completed within 90 days
              </Typography>
            </Box>


          </Box>


          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Your Rights and Options
            </Typography>
            <Typography variant="body1" className="section-content">
              You have comprehensive rights regarding your data deletion:
            </Typography>

            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Right to Deletion
              </Typography>
              <Typography variant="body1" className="section-content">
                • Request deletion of any personal data we hold<br />
                • Choose between complete or selective deletion<br />
                • Withdraw consent for data processing<br />
                • Request immediate account suspension
              </Typography>
            </Box>


            <Box className="subsection">
              <Typography variant="h6" className="subsection-title">
                Verification and Confirmation
              </Typography>
              <Typography variant="body1" className="section-content">
                • Receive confirmation of deletion completion<br />
                • Obtain certificates of data destruction<br />
                • Request verification of data removal<br />
                • Monitor deletion progress
              </Typography>
            </Box>
          </Box>


          <Box className="privacy-section">
            <Typography variant="h4" component="h2" className="section-title">
              Contact and Support
            </Typography>
            <Typography variant="body1" className="section-content">
              For data deletion requests or questions about this policy, please contact us through our official channels. We are committed to processing all deletion requests promptly and securely, ensuring your privacy rights are fully respected.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DataDeletionPolicy;
