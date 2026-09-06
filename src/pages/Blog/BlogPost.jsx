import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Card,
  Chip,
  Button,
  Breadcrumbs,
  Grid
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SEOHead from '../../components/SEO/SEOHead';
import { BLOG_POSTS } from '../../data/blogData';
import { useAppSettings } from '../../context/AppSettingsContext.jsx';
import '../../styles/pages/featurespage.scss';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { softwareName } = useAppSettings();

  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Related articles
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  // Markdown-like simple renderer for paragraphs, bold text, bullet points, and tables
  const renderFormattedBody = (bodyText) => {
    const lines = bodyText.split('\n');
    const elements = [];
    let inTable = false;
    let tableRows = [];

    const flushTable = (key) => {
      if (tableRows.length > 0) {
        const headers = tableRows[0];
        const rows = tableRows.slice(2); // Skip separator row
        elements.push(
          <Box
            key={key}
            sx={{
              overflowX: 'auto',
              my: 3.5,
              borderRadius: '14px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#1e293b', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8fafc' }}>
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: '14px 18px',
                        textAlign: 'left',
                        borderBottom: '2px solid #e2e8f0',
                        fontWeight: 700,
                        color: '#0f172a'
                      }}
                    >
                      {h.trim()}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rIdx) => (
                  <tr
                    key={rIdx}
                    style={{
                      backgroundColor: rIdx % 2 === 0 ? '#ffffff' : '#f8fafc',
                      borderBottom: '1px solid #f1f5f9'
                    }}
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} style={{ padding: '14px 18px', color: '#334155' }}>
                        {cell.replace(/\*\*(.*?)\*\*/g, '$1').trim()}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Box>
        );
        tableRows = [];
        inTable = false;
      }
    };

    lines.forEach((line, idx) => {
      const trimmed = line.trim();

      if (trimmed.startsWith('|')) {
        inTable = true;
        const cols = trimmed
          .split('|')
          .slice(1, -1)
          .map((c) => c.trim());
        tableRows.push(cols);
        return;
      } else if (inTable) {
        flushTable(`table-${idx}`);
      }

      if (!trimmed) {
        elements.push(<Box key={idx} sx={{ height: 12 }} />);
        return;
      }

      if (trimmed.startsWith('- ')) {
        elements.push(
          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, my: 1, pl: 1 }}>
            <span style={{ color: 'var(--primary-color, #10b981)', fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '1.2' }}>•</span>
            <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.75, fontSize: '1.02rem' }}>
              <span
                dangerouslySetInnerHTML={{
                  __html: trimmed.substring(2).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </Typography>
          </Box>
        );
      } else if (/^\d+\.\s/.test(trimmed)) {
        elements.push(
          <Box key={idx} sx={{ my: 1.2, pl: 1 }}>
            <Typography variant="body1" sx={{ color: '#334155', lineHeight: 1.75, fontSize: '1.02rem' }}>
              <span
                dangerouslySetInnerHTML={{
                  __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }}
              />
            </Typography>
          </Box>
        );
      } else {
        elements.push(
          <Typography
            key={idx}
            variant="body1"
            sx={{
              color: '#334155',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              my: 1.2
            }}
          >
            <span
              dangerouslySetInnerHTML={{
                __html: trimmed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              }}
            />
          </Typography>
        );
      }
    });

    if (inTable) {
      flushTable('table-end');
    }

    return elements;
  };

  return (
    <div className="seo-landing-page">
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        primaryKeyword={post.keywords[0]}
        canonicalUrl={`https://savoryops.com/blog/${post.slug}`}
      />

      <Container maxWidth="lg" sx={{ pt: 2, pb: 8 }}>
        {/* Breadcrumbs */}
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: '#94a3b8' }} />}
            aria-label="breadcrumb"
          >
            <Link to="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
              Home
            </Link>
            <Link to="/blog" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
              Blog
            </Link>
            <Typography sx={{ color: 'var(--primary-color, #10b981)', fontSize: '0.9rem', fontWeight: 600 }}>
              {post.category}
            </Typography>
          </Breadcrumbs>
        </Box>

        {/* Back Link */}
        <Button
          component={Link}
          to="/blog"
          startIcon={<ArrowBackIcon />}
          sx={{
            color: '#64748b',
            mb: 3,
            textTransform: 'none',
            fontWeight: 600,
            '&:hover': { color: 'var(--primary-color, #10b981)', bgcolor: 'transparent' }
          }}
        >
          Back to all guides
        </Button>

        {/* Article Header */}
        <Box sx={{ maxWidth: 880, mx: 'auto', mb: 5 }}>
          <Chip
            label={post.category}
            size="small"
            sx={{
              bgcolor: 'rgba(138, 177, 125, 0.16)',
              color: '#2e5922',
              fontWeight: 700,
              mb: 2
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3.1rem' },
              fontWeight: 800,
              color: '#0f172a',
              lineHeight: 1.25,
              mb: 2.5
            }}
          >
            {post.title}
          </Typography>

          {/* Author & Meta Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 3,
              flexWrap: 'wrap',
              py: 2,
              borderTop: '1px solid #e2e8f0',
              borderBottom: '1px solid #e2e8f0',
              color: '#64748b',
              fontSize: '0.9rem'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonOutlineIcon sx={{ fontSize: 18, color: 'var(--primary-color, #10b981)' }} />
              <span>
                <strong style={{ color: '#0f172a' }}>{post.author}</strong> ({post.authorRole})
              </span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
              <CalendarTodayIcon sx={{ fontSize: 16 }} />
              <span>{post.date}</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
              <AccessTimeIcon sx={{ fontSize: 16 }} />
              <span>{post.readTime}</span>
            </Box>
          </Box>
        </Box>

        {/* Main Content Layout */}
        <Box sx={{ maxWidth: 880, mx: 'auto' }}>
          {/* Table of Contents Box */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <Card
              sx={{
                bgcolor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                p: 3.5,
                mb: 4,
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                <ListAltIcon sx={{ color: 'var(--primary-color, #10b981)' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem' }}>
                  Table of Contents
                </Typography>
              </Box>
              <Box component="ol" sx={{ pl: 3, m: 0, '& li': { mb: 1 } }}>
                {post.tableOfContents.map((toc, idx) => {
                  const label = typeof toc === 'string' ? toc : (toc.title || '');
                  const anchor = typeof toc === 'string' 
                    ? toc.toLowerCase().replace(/[^a-z0-9]+/g, '-') 
                    : (toc.id || `section-${idx}`);
                  return (
                    <li key={idx}>
                      <a
                        href={`#${anchor}`}
                        style={{
                          color: 'var(--primary-color, #10b981)',
                          textDecoration: 'none',
                          fontWeight: 600,
                          fontSize: '0.98rem'
                        }}
                      >
                        {label}
                      </a>
                    </li>
                  );
                })}
              </Box>
            </Card>
          )}

          {/* Post Content Sections */}
          {(post.content || post.sections || []).map((sec, sIdx) => (
            <Box
              key={sIdx}
              id={sec.sectionId || sec.heading?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || `section-${sIdx}`}
              sx={{ mb: 5 }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.5rem', sm: '1.85rem' },
                  fontWeight: 800,
                  color: '#0f172a',
                  mb: 2,
                  mt: 3,
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    display: 'block',
                    width: '40px',
                    height: '3px',
                    bgcolor: 'var(--primary-color, #10b981)',
                    borderRadius: '2px',
                    mt: 1
                  }
                }}
              >
                {sec.heading}
              </Typography>
              {renderFormattedBody(sec.body)}
            </Box>
          ))}
        </Box>

        {/* High-Converting CTA Box */}
        <section className="bottom-cta-banner" style={{ maxWidth: 880, margin: '48px auto' }}>
          <h2>Streamline Your Kitchen & Billing with {softwareName || 'SavoryOps'}</h2>
          <p>
            Experience the fast, hardware-independent restaurant operating system with native KOT, KDS, inventory control, and zero hidden processing surcharges.
          </p>
          <div className="bottom-cta-buttons">
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              size="large"
              endIcon={<ArrowForwardIcon />}
              className="btn-primary"
            >
              Start Free 14-Day Trial
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/solutions/kitchen-order-ticket-system"
              size="large"
              className="btn-secondary"
            >
              Learn About KOT System
            </Button>
          </div>
        </section>

        {/* Related Articles Cross-Linking */}
        {relatedPosts.length > 0 && (
          <Box sx={{ maxWidth: 880, mx: 'auto', mb: 6 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 800, mb: 3, color: '#0f172a' }}>
              Related Operational Playbooks
            </Typography>
            <Grid container spacing={3}>
              {relatedPosts.map((rel) => (
                <Grid item xs={12} sm={6} key={rel.slug}>
                  <Card
                    component={Link}
                    to={`/blog/${rel.slug}`}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      bgcolor: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '16px',
                      p: 3,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)',
                      transition: 'all 0.25s ease',
                      '&:hover': {
                        borderColor: 'var(--primary-color, #10b981)',
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.06)'
                      }
                    }}
                  >
                    <Chip
                      label={rel.category}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(138, 177, 125, 0.16)',
                        color: '#2e5922',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        mb: 1.5
                      }}
                    />
                    <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 700, fontSize: '1.1rem', mb: 1, lineHeight: 1.35 }}>
                      {rel.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'var(--primary-color, #10b981)', fontWeight: 600, fontSize: '0.85rem' }}>
                      {rel.readTime} • Read Guide →
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </div>
  );
};

export default BlogPost;
