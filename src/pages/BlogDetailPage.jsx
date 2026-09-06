import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  Button,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import SEOHead from '../components/SEO/SEOHead';
import { getBlogPostBySlug, getRelatedBlogPosts, BLOG_POSTS } from '../data/blogsData';
import { useAppSettings } from '../context/AppSettingsContext.jsx';

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { softwareName } = useAppSettings();

  const [copiedToastOpen, setCopiedToastOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState('');

  const post = getBlogPostBySlug(slug);
  const relatedPosts = post ? getRelatedBlogPosts(post.id, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Track active section on scroll for Table of Contents
  useEffect(() => {
    if (!post?.sections?.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (let i = post.sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(post.sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSectionId(post.sections[i].id);
          return;
        }
      }
      if (post.sections[0]) {
        setActiveSectionId(post.sections[0].id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [post]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedToastOpen(true);
  };

  const handleShareTwitter = () => {
    const text = encodeURIComponent(`${post?.title} - by ${post?.author.name}`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'noopener,noreferrer');
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'noopener,noreferrer');
  };

  if (!post) {
    return (
      <div className="blog-detail-container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
          <ErrorOutlineIcon sx={{ fontSize: 64, color: '#ef4444', mb: 2 }} />
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
            Article Not Found
          </Typography>
          <Typography sx={{ color: '#6b7280', mb: 4, maxWidth: '500px', mx: 'auto' }}>
            We could not find the blog article you are looking for. It may have been moved or updated.
          </Typography>
          <Button
            component={Link}
            to="/blog"
            variant="contained"
            startIcon={<ArrowBackIcon />}
            sx={{ bgcolor: '#059669', '&:hover': { bgcolor: '#047857' }, textTransform: 'none', px: 3, py: 1 }}
          >
            Back to Blog
          </Button>
        </Container>
      </div>
    );
  }

  return (
    <div className="blog-detail-container">
      <SEOHead
        title={`${post.title} | ${softwareName || 'SavoryOps'} Blog`}
        description={post.excerpt}
        keywords={post.tags}
        ogImage={post.coverImage}
        canonicalUrl={`https://savoryops.com/blog/${post.slug}`}
        schemaType="Article"
      />

      {/* Breadcrumbs Navigation Bar */}
      <div className="blog-breadcrumbs-bar">
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span style={{ color: '#9ca3af' }}>/</span>
            <Link to="/blog" className="breadcrumb-link">Blog</Link>
            <span style={{ color: '#9ca3af' }}>/</span>
            <span className="breadcrumb-active" style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {post.title}
            </span>
          </Box>
        </Container>
      </div>

      <Container maxWidth="lg">
        {/* Article Header */}
        <header className="article-header">
          <span
            className="category-chip"
            style={{
              backgroundColor: `${post.categoryColor}15`,
              color: post.categoryColor,
              border: `1px solid ${post.categoryColor}40`
            }}
          >
            {post.category}
          </span>

          <h1 className="article-title">{post.title}</h1>
          <p className="article-subtitle">{post.subtitle}</p>

          <div className="article-author-row">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="author-avatar-large"
            />
            <div className="author-details-box">
              <div className="name">{post.author.name}</div>
              <div className="role-date">
                <span>{post.author.role}</span>
                <span>•</span>
                <span>{post.publishedDate}</span>
                <span>•</span>
                <span><AccessTimeIcon sx={{ fontSize: 14, verticalAlign: 'middle', mr: 0.3 }} />{post.readTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="article-hero-image-wrap">
          <img
            src={post.coverImage}
            alt={post.title}
          />
        </div>

        {/* Stat Highlights Row */}
        {post.stats && post.stats.length > 0 && (
          <div className="article-stats-bar">
            {post.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-num">{stat.number}</div>
                <div className="stat-lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Main Content & Sidebar Grid */}
        <div className="article-main-grid">
          {/* Sidebar */}
          <aside className="article-sidebar">
            {/* Table of Contents */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <div className="sidebar-widget">
                <div className="widget-title">
                  <FormatListBulletedIcon sx={{ fontSize: 18, color: '#059669' }} />
                  Table of Contents
                </div>
                <ul className="toc-list">
                  {post.tableOfContents.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className={activeSectionId === item.id ? 'active' : ''}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(item.id);
                          if (el) {
                            const offset = 90;
                            const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                            window.scrollTo({ top, behavior: 'smooth' });
                          }
                        }}
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Social Sharing */}
            <div className="sidebar-widget">
              <div className="widget-title">
                <ShareIcon sx={{ fontSize: 18, color: '#059669' }} />
                Share Article
              </div>
              <div className="share-buttons-row">
                <IconButton
                  size="small"
                  className="share-btn"
                  onClick={handleShareTwitter}
                  title="Share on X / Twitter"
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  className="share-btn"
                  onClick={handleShareLinkedIn}
                  title="Share on LinkedIn"
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  className="share-btn"
                  onClick={handleShareFacebook}
                  title="Share on Facebook"
                >
                  <FacebookIcon fontSize="small" />
                </IconButton>
                <IconButton
                  size="small"
                  className="share-btn"
                  onClick={handleCopyLink}
                  title="Copy Article Link"
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </div>
            </div>

            {/* In-sidebar Product Promotion */}
            <div className="sidebar-widget sidebar-cta">
              <RocketLaunchIcon sx={{ fontSize: 28, color: '#059669', mb: 1 }} />
              <h4>Modernize Your Kitchen</h4>
              <p>
                Eliminate order chaos, track ingredient costs in real-time, and run multi-branch operations seamlessly.
              </p>
              <Button
                component={Link}
                to="/signup"
                variant="contained"
                fullWidth
                sx={{
                  bgcolor: '#059669',
                  '&:hover': { bgcolor: '#047857' },
                  textTransform: 'none',
                  fontWeight: 700,
                  borderRadius: '8px',
                  py: 1
                }}
              >
                Start Free Trial
              </Button>
            </div>
          </aside>

          {/* Article Main Body Column */}
          <main className="article-body-column">
            {/* Key Takeaways Box */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="key-takeaways-card">
                <div className="takeaways-heading">
                  <CheckCircleIcon sx={{ fontSize: 20, color: '#059669' }} />
                  Executive Summary & Key Takeaways
                </div>
                <ul>
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx}>{takeaway}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Sections */}
            {post.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="article-section"
              >
                <h2>{section.heading}</h2>

                {section.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}

                {section.quote && (
                  <blockquote className="article-quote">
                    <p>“{section.quote.text}”</p>
                    <cite>— {section.quote.author}</cite>
                  </blockquote>
                )}

                {section.bulletPoints && section.bulletPoints.length > 0 && (
                  <ul>
                    {section.bulletPoints.map((bp, bpIdx) => (
                      <li key={bpIdx}>{bp}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="article-tags-wrap">
                <span className="tags-label">Topics:</span>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Author Biography */}
            <div className="author-bio-card">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="bio-avatar"
              />
              <div className="bio-content">
                <h4>About {post.author.name}</h4>
                <div className="bio-role">{post.author.role}</div>
                <p>
                  Specializing in commercial restaurant operations, culinary technology integration, and inventory optimization. Dedicated to helping independent operators and multi-unit brands achieve sustainable margin growth.
                </p>
              </div>
            </div>
          </main>
        </div>
      </Container>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="related-posts-section">
          <Container maxWidth="lg">
            <h2 className="section-title">Related Operational Guides</h2>
            <p className="section-subtitle">Continue reading to sharpen your restaurant management playbooks</p>

            <div className="blog-grid" style={{ marginBottom: 0 }}>
              {relatedPosts.map((related) => (
                <article key={related.id} className="blog-card">
                  <Link
                    to={`/blog/${related.slug}`}
                    className="card-image-wrap"
                    style={{ textDecoration: 'none' }}
                  >
                    <img
                      src={related.coverImage}
                      alt={related.title}
                      loading="lazy"
                    />
                    <span
                      className="card-category-badge"
                      style={{ backgroundColor: related.categoryColor }}
                    >
                      {related.category}
                    </span>
                    <span className="card-read-time">{related.readTime}</span>
                  </Link>

                  <div className="card-body">
                    <Link
                      to={`/blog/${related.slug}`}
                      style={{ textDecoration: 'none' }}
                    >
                      <h3 className="card-title">{related.title}</h3>
                    </Link>

                    <p className="card-excerpt">{related.excerpt}</p>

                    <div className="card-footer">
                      <div className="author-meta">
                        <img
                          src={related.author.avatar}
                          alt={related.author.name}
                          className="avatar-mini"
                        />
                        <div className="name-date">
                          <div className="name">{related.author.name}</div>
                          <div className="date">{related.publishedDate}</div>
                        </div>
                      </div>

                      <Link
                        to={`/blog/${related.slug}`}
                        className="read-arrow"
                        style={{ textDecoration: 'none' }}
                      >
                        Read <ArrowForwardIcon sx={{ fontSize: 16 }} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Copy Link Snackbar Toast */}
      <Snackbar
        open={copiedToastOpen}
        autoHideDuration={3000}
        onClose={() => setCopiedToastOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setCopiedToastOpen(false)}
          severity="success"
          sx={{ width: '100%', bgcolor: '#065f46', color: '#ffffff' }}
        >
          Article link copied to clipboard!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BlogDetailPage;
