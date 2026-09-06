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
  Grid,
  Divider
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ListAltIcon from '@mui/icons-material/ListAlt';
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
              my: 3,
              borderRadius: 2,
              border: '1px solid rgba(255,255,255,0.12)'
            }}
          >
            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(30, 41, 59, 0.9)' }}>
                  {headers.map((h, i) => (
                    <th
                      key={i}
                      style={{
                        padding: '12px 16px',
                        textAlign: 'left',
                        borderBottom: '1px solid rgba(255,255,255,0.15)',
                        fontWeight: 700
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
                      backgroundColor: rIdx % 2 === 0 ? 'rgba(15, 23, 42, 0.6)' : 'rgba(30, 41, 59, 0.4)',
                      borderBottom: '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} style={{ padding: '12px 16px' }}>
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
          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, my: 0.8, pl: 2 }}>
            <span style={{ color: 'var(--primary-color, #10b981)', fontWeight: 'bold' }}>•</span>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
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
          <Box key={idx} sx={{ my: 1, pl: 2 }}>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.7 }}>
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
              color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.8,
              fontSize: '1.05rem',
              my: 1
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
    <Box sx={{ bgcolor: 'var(--bg-primary, #0f172a)', color: '#fff', py: 4, minHeight: '80vh' }}>
      <SEOHead
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.keywords}
        primaryKeyword={post.keywords[0]}
        canonicalUrl={`https://savoryops.com/blog/${post.slug}`}
      />

      <Container maxWidth="lg">
        {/* Breadcrumbs */}
        <Box sx={{ mb: 3 }}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" sx={{ color: 'rgba(255,255,255,0.4)' }} />}
            aria-label="breadcrumb"
          >
            <Link to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Home
            </Link>
            <Link to="/blog" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>
              Blog
            </Link>
            <Typography sx={{ color: 'var(--primary-color, #10b981)', fontSize: '0.9rem', fontWeight: 600 }}>
              {post.category}
            </Typography>
          </Breadcrumbs>
        </Box>

        {/* Article Header */}
        <Box sx={{ maxWidth: 840, mx: 'auto', mb: 5 }}>
          <Chip
            label={post.category}
            size="small"
            sx={{
              bgcolor: 'rgba(16, 185, 129, 0.15)',
              color: 'var(--primary-color, #10b981)',
              fontWeight: 700,
              mb: 2
            }}
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: '2rem', sm: '2.6rem', md: '3.2rem' },
              fontWeight: 800,
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
              borderTop: '1px solid rgba(255,255,255,0.1)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.9rem'
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonOutlineIcon sx={{ fontSize: 18, color: 'var(--primary-color, #10b981)' }} />
              <span>
                <strong>{post.author}</strong> ({post.authorRole})
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
        <Grid container spacing={4} sx={{ maxWidth: 840, mx: 'auto' }}>
          {/* Table of Contents Box */}
          {post.tableOfContents && post.tableOfContents.length > 0 && (
            <Grid item xs={12}>
              <Card
                sx={{
                  bgcolor: 'rgba(30, 41, 59, 0.6)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 3,
                  p: 3,
                  mb: 2
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <ListAltIcon sx={{ color: 'var(--primary-color, #10b981)' }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff', fontSize: '1.1rem' }}>
                    Table of Contents
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'color 0.2s'
                      }}
                      onMouseEnter={(e) => (e.target.style.color = 'var(--primary-color, #10b981)')}
                      onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.85)')}
                    >
                      {item.title}
                    </a>
                  ))}
                </Box>
              </Card>
            </Grid>
          )}

          {/* Article Sections */}
          <Grid item xs={12}>
            {post.content.map((sec, sIdx) => (
              <Box key={sIdx} id={sec.sectionId} sx={{ mb: 5, scrollMarginTop: 100 }}>
                <Typography
                  variant="h2"
                  component="h2"
                  sx={{
                    fontSize: { xs: '1.5rem', md: '1.9rem' },
                    fontWeight: 700,
                    color: '#fff',
                    mb: 2,
                    pb: 1,
                    borderBottom: '1px solid rgba(255,255,255,0.08)'
                  }}
                >
                  {sec.heading}
                </Typography>
                {renderFormattedBody(sec.body)}
              </Box>
            ))}
          </Grid>
        </Grid>

        {/* High-Converting CTA Box */}
        <Box sx={{ maxWidth: 840, mx: 'auto', my: 6 }}>
          <Card
            sx={{
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(6, 78, 59, 0.45))',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              borderRadius: 3,
              p: { xs: 3, md: 5 },
              textAlign: 'center'
            }}
          >
            <Typography variant="h4" component="h3" sx={{ fontWeight: 800, color: '#fff', mb: 1.5 }}>
              Streamline Your Kitchen & Billing with {softwareName || 'SavoryOps'}
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', mb: 3, maxWidth: 600, mx: 'auto' }}>
              Experience the fast, hardware-independent restaurant operating system with native KOT, KDS, inventory control, and zero hidden processing surcharges.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                component={Link}
                to="/signup"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: 'var(--primary-color, #10b981)',
                  color: '#fff',
                  px: 3.5,
                  py: 1.3,
                  fontWeight: 700,
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'var(--primary-dark, #059669)' }
                }}
              >
                Start Free 14-Day Trial
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/solutions/kitchen-order-ticket-system"
                size="large"
                sx={{
                  borderColor: 'rgba(255,255,255,0.4)',
                  color: '#fff',
                  px: 3,
                  py: 1.3,
                  fontWeight: 600,
                  borderRadius: 2,
                  textTransform: 'none',
                  '&:hover': { borderColor: '#fff' }
                }}
              >
                Learn About KOT System
              </Button>
            </Box>
          </Card>
        </Box>

        {/* Related Articles Cross-Linking */}
        {relatedPosts.length > 0 && (
          <Box sx={{ maxWidth: 840, mx: 'auto', mb: 8 }}>
            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 3, color: '#fff' }}>
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
                      bgcolor: 'rgba(30, 41, 59, 0.5)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 2.5,
                      p: 2.5,
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: 'var(--primary-color, #10b981)',
                        transform: 'translateY(-3px)'
                      }
                    }}
                  >
                    <Chip
                      label={rel.category}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(16, 185, 129, 0.15)',
                        color: 'var(--primary-color, #10b981)',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        mb: 1
                      }}
                    />
                    <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', mb: 1 }}>
                      {rel.title}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                      {rel.readTime} • Read Guide →
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default BlogPost;
