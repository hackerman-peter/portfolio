import { ThemeProvider, CssBaseline, Container, Box, Typography, Card, Chip, Stack, IconButton, Grid, Button, AppBar, Toolbar, useScrollTrigger, Slide } from '@mui/material';
import { GitHub, LinkedIn, Email, ArrowForward, KeyboardArrowDown, WorkOutline, SchoolOutlined, CodeOutlined, EmojiEventsOutlined, AutoAwesome } from '@mui/icons-material';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { theme } from './theme';

// Motion components
const MotionBox = motion(Box);
const MotionCard = motion(Card);
const MotionTypography = motion(Typography);

// Animated section wrapper
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Experience data
const experiences = [
  {
    company: 'bri3f.ai',
    role: 'Co-Founder',
    period: '2024 - Present',
    color: '#1a73e8',
    description: 'AI Web3 analytics platform transforming fragmented social data into actionable insights',
    highlights: [
      'Built 0→1 product distilling chat and social data into real-time trend intelligence',
      'Engineered ML pipeline clustering 100K+ weekly messages using unsupervised learning',
      'Won $3K Starkware prize at NYC Web3 Summit; secured $20K pre-seed funding',
    ],
    skills: ['AI/ML', 'Python', 'TypeScript', 'Web3'],
  },
  {
    company: 'Constantinople',
    role: 'Software Engineer III',
    period: 'Aug 2022 - Apr 2025',
    color: '#34a853',
    description: 'Fintech scale-up building next-gen payment infrastructure',
    highlights: [
      'Architected distributed microservices supporting 50K+ DAU with 99.9% uptime',
      'Built payment orchestration layer reducing integration overhead by 30%',
      'Launched card features boosting activation rates by 20%',
    ],
    skills: ['Go', 'Java', 'Kubernetes', 'gRPC'],
  },
  {
    company: 'Accenture',
    role: 'Software Engineer',
    period: 'Feb 2021 - Aug 2022',
    color: '#ea4335',
    description: 'Global consulting firm delivering enterprise solutions',
    highlights: [
      'Built CV processing system with computer vision handling 10K+ docs/week',
      'Designed OCR algorithms cutting manual review time by 40%',
      'Led technical delivery on multi-million-dollar client projects',
    ],
    skills: ['Python', 'OpenCV', 'Google Cloud', 'React'],
  },
];

const skills = [
  { category: 'Languages', items: ['Java', 'Go', 'Python', 'TypeScript', 'C++'] },
  { category: 'Frontend', items: ['React', 'Next.js', 'Kotlin', 'Material UI'] },
  { category: 'Infrastructure', items: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform'] },
  { category: 'Data & AI', items: ['PostgreSQL', 'Redis', 'ML/AI', 'Computer Vision'] },
];

// Hide AppBar on scroll
function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const [activeExp, setActiveExp] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      {/* Navigation */}
      <HideOnScroll>
        <AppBar 
          elevation={0} 
          sx={{ 
            bgcolor: 'rgba(255,255,255,0.8)', 
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto' }}>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 500 }}>
              Peter Liang
            </Typography>
            <Stack direction="row" spacing={1}>
              {['About', 'Experience', 'Skills'].map((item) => (
                <Button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  sx={{ color: 'text.secondary', '&:hover': { bgcolor: 'rgba(26,115,232,0.08)', color: 'primary.main' } }}
                >
                  {item}
                </Button>
              ))}
              <Button 
                variant="contained" 
                href="mailto:peter.liang.official@gmail.com"
                sx={{ ml: 2 }}
              >
                Get in touch
              </Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      {/* Hero Section */}
      <MotionBox
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e8f0fe 50%, #f8f9fa 100%)',
        }}
      >
        {/* Animated background shapes */}
        <MotionBox
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          sx={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(26,115,232,0.08) 0%, transparent 70%)',
            top: -100,
            right: -100,
          }}
        />
        <MotionBox
          animate={{ 
            rotate: -360,
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          sx={{
            position: 'absolute',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(52,168,83,0.06) 0%, transparent 70%)',
            bottom: -50,
            left: -50,
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', pt: 8 }}>
          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variant="body1"
            sx={{ 
              color: 'primary.main', 
              fontWeight: 500, 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
            }}
          >
            <AutoAwesome sx={{ fontSize: 20 }} />
            Software Engineer III
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variant="h1"
            sx={{ 
              color: 'text.primary',
              mb: 3,
              fontSize: { xs: '2.5rem', md: '4rem' },
            }}
          >
            Building systems that{' '}
            <Box 
              component="span" 
              sx={{ 
                background: 'linear-gradient(90deg, #1a73e8, #34a853)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              scale
            </Box>
          </MotionTypography>

          <MotionTypography
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            variant="h4"
            sx={{ 
              color: 'text.secondary',
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              mb: 5,
              lineHeight: 1.6,
            }}
          >
            Distributed systems engineer with a passion for turning complex challenges into elegant, reliable solutions.
          </MotionTypography>

          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 6 }}>
              <Button 
                variant="contained" 
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => scrollToSection('experience')}
                sx={{ px: 4, py: 1.5 }}
              >
                View my work
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                href="/Peter_Liang_Resume.pdf"
                sx={{ px: 4, py: 1.5 }}
              >
                Download CV
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} justifyContent="center">
              <IconButton 
                href="mailto:peter.liang.official@gmail.com"
                sx={{ 
                  bgcolor: 'white', 
                  boxShadow: 1,
                  '&:hover': { bgcolor: 'primary.main', color: 'white' },
                  transition: 'all 0.2s',
                }}
              >
                <Email />
              </IconButton>
              <IconButton 
                href="https://github.com/hackerman-peter" 
                target="_blank"
                sx={{ 
                  bgcolor: 'white', 
                  boxShadow: 1,
                  '&:hover': { bgcolor: '#333', color: 'white' },
                  transition: 'all 0.2s',
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton 
                href="https://www.linkedin.com/in/-liang/" 
                target="_blank"
                sx={{ 
                  bgcolor: 'white', 
                  boxShadow: 1,
                  '&:hover': { bgcolor: '#0077b5', color: 'white' },
                  transition: 'all 0.2s',
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            sx={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)' }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <IconButton onClick={() => scrollToSection('about')} sx={{ color: 'text.secondary' }}>
                <KeyboardArrowDown fontSize="large" />
              </IconButton>
            </motion.div>
          </MotionBox>
        </Container>
      </MotionBox>

      {/* About Section */}
      <Box id="about" sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Grid container spacing={6} sx={{ alignItems: 'center' }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500, mb: 2 }}>
                  ABOUT ME
                </Typography>
                <Typography variant="h2" sx={{ color: 'text.primary', mb: 3 }}>
                  Crafting scalable solutions at the intersection of backend systems and AI
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  I'm a Software Engineer III with deep expertise in distributed systems and high-concurrency architecture. 
                  I've scaled platforms to support 50K+ daily active users while maintaining 99.9% uptime.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Currently exploring the frontier of AI-powered applications, building tools that leverage large language models 
                  for real-world automation and intelligence augmentation.
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Grid container spacing={2}>
                  {[
                    { number: '50K+', label: 'Daily Active Users', color: '#1a73e8' },
                    { number: '99.9%', label: 'System Uptime', color: '#34a853' },
                    { number: '100K+', label: 'Messages Processed/Week', color: '#ea4335' },
                    { number: '$23K', label: 'Funding Raised', color: '#fbbc04' },
                  ].map((stat, i) => (
                    <Grid size={{ xs: 6 }} key={stat.label}>
                      <AnimatedSection delay={i * 0.1}>
                        <Card 
                          sx={{ 
                            p: 3, 
                            textAlign: 'center',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            '&:hover': {
                              transform: 'translateY(-8px)',
                              boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                            },
                          }}
                        >
                          <Typography variant="h3" sx={{ color: stat.color, mb: 1 }}>
                            {stat.number}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {stat.label}
                          </Typography>
                        </Card>
                      </AnimatedSection>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box id="experience" sx={{ py: 12, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <WorkOutline sx={{ color: 'primary.main' }} />
                <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                  EXPERIENCE
                </Typography>
              </Stack>
              <Typography variant="h2" sx={{ color: 'text.primary' }}>
                Where I've worked
              </Typography>
            </Box>
          </AnimatedSection>

          <Grid container spacing={4}>
            {/* Timeline sidebar */}
            <Grid size={{ xs: 12, md: 4 }}>
              <AnimatedSection delay={0.2}>
                <Stack spacing={1}>
                  {experiences.map((exp, i) => (
                    <MotionCard
                      key={exp.company}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveExp(i)}
                      sx={{ 
                        p: 2,
                        cursor: 'pointer',
                        bgcolor: activeExp === i ? 'white' : 'transparent',
                        boxShadow: activeExp === i ? 2 : 0,
                        borderLeft: `4px solid ${activeExp === i ? exp.color : 'transparent'}`,
                        transition: 'all 0.3s',
                      }}
                    >
                      <Typography variant="h4" sx={{ color: activeExp === i ? exp.color : 'text.secondary' }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {exp.role} • {exp.period}
                      </Typography>
                    </MotionCard>
                  ))}
                </Stack>
              </AnimatedSection>
            </Grid>

            {/* Experience detail */}
            <Grid size={{ xs: 12, md: 8 }}>
              <AnimatedSection delay={0.4}>
                <MotionCard
                  key={activeExp}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  sx={{ p: 4, minHeight: 400 }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="h3" sx={{ color: experiences[activeExp].color, mb: 1 }}>
                      {experiences[activeExp].company}
                    </Typography>
                    <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
                      {experiences[activeExp].role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {experiences[activeExp].period}
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontStyle: 'italic' }}>
                    {experiences[activeExp].description}
                  </Typography>

                  <Stack spacing={2} sx={{ mb: 3 }}>
                    {experiences[activeExp].highlights.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <Box sx={{ 
                            width: 8, 
                            height: 8, 
                            borderRadius: '50%', 
                            bgcolor: experiences[activeExp].color,
                            mt: 1,
                            flexShrink: 0,
                          }} />
                          <Typography variant="body1" sx={{ color: 'text.primary' }}>
                            {h}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Stack>

                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {experiences[activeExp].skills.map((skill) => (
                      <Chip 
                        key={skill}
                        label={skill}
                        sx={{ 
                          bgcolor: `${experiences[activeExp].color}15`,
                          color: experiences[activeExp].color,
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </MotionCard>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box id="skills" sx={{ py: 12, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <AnimatedSection>
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center" sx={{ mb: 2 }}>
                <CodeOutlined sx={{ color: 'primary.main' }} />
                <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                  SKILLS
                </Typography>
              </Stack>
              <Typography variant="h2" sx={{ color: 'text.primary' }}>
                Technologies I work with
              </Typography>
            </Box>
          </AnimatedSection>

          <Grid container spacing={3}>
            {skills.map((group, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 3 }} key={group.category}>
                <AnimatedSection delay={i * 0.15}>
                  <MotionCard
                    whileHover={{ y: -8 }}
                    sx={{ 
                      p: 3, 
                      height: '100%',
                      background: 'linear-gradient(135deg, #f8f9fa 0%, white 100%)',
                    }}
                  >
                    <Typography variant="h4" sx={{ color: 'primary.main', mb: 2 }}>
                      {group.category}
                    </Typography>
                    <Stack spacing={1}>
                      {group.items.map((item, j) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                            {item}
                          </Typography>
                        </motion.div>
                      ))}
                    </Stack>
                  </MotionCard>
                </AnimatedSection>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Education & Achievements */}
      <Box sx={{ py: 12, bgcolor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid size={{ xs: 12, md: 6 }}>
              <AnimatedSection>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                  <SchoolOutlined sx={{ color: 'primary.main' }} />
                  <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: 500 }}>
                    EDUCATION
                  </Typography>
                </Stack>
                <Stack spacing={3}>
                  <MotionCard whileHover={{ scale: 1.02 }} sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
                      University of Sydney
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'primary.main', mb: 0.5 }}>
                      Bachelor of Science
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      Major in Software Development • Minor in Computer Science
                    </Typography>
                  </MotionCard>
                  <MotionCard whileHover={{ scale: 1.02 }} sx={{ p: 3 }}>
                    <Typography variant="h4" sx={{ color: 'text.primary', mb: 1 }}>
                      Peking University
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'primary.main', mb: 0.5 }}>
                      Global Exchange Program
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      School of International Studies
                    </Typography>
                  </MotionCard>
                </Stack>
              </AnimatedSection>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <AnimatedSection delay={0.2}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                  <EmojiEventsOutlined sx={{ color: '#fbbc04' }} />
                  <Typography variant="body1" sx={{ color: '#fbbc04', fontWeight: 500 }}>
                    ACHIEVEMENTS
                  </Typography>
                </Stack>
                <MotionCard 
                  whileHover={{ scale: 1.02 }}
                  sx={{ 
                    p: 4,
                    background: 'linear-gradient(135deg, #fffbeb 0%, white 100%)',
                    border: '1px solid #fef3c7',
                  }}
                >
                  <Stack spacing={3}>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#d97706', mb: 1 }}>
                        🏆 Web3 CUBE Summit NYC
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Won $3K Starkware prize, competing against 25+ selected teams from around the world
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#d97706', mb: 1 }}>
                        💰 Pre-seed Funding
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Secured $20K from a Web3 native fund for bri3f.ai
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#d97706', mb: 1 }}>
                        📈 Enterprise Scale
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        Built and maintained systems supporting 50K+ DAU with 99.9% uptime
                      </Typography>
                    </Box>
                  </Stack>
                </MotionCard>
              </AnimatedSection>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ py: 12, bgcolor: 'primary.main' }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <AnimatedSection>
            <Typography variant="h2" sx={{ color: 'white', mb: 3 }}>
              Let's build something great together
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, maxWidth: 500, mx: 'auto' }}>
              I'm always interested in hearing about new opportunities and challenging problems to solve.
            </Typography>
            <Button 
              variant="contained" 
              size="large"
              href="mailto:peter.liang.official@gmail.com"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main',
                px: 5,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.9)',
                },
              }}
            >
              Get in touch
            </Button>
          </AnimatedSection>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: '#202124' }}>
        <Container>
          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap" gap={2}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              © 2026 Peter Liang. Built with React + Material Design 3.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton size="small" href="mailto:peter.liang.official@gmail.com" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                <Email fontSize="small" />
              </IconButton>
              <IconButton size="small" href="https://github.com/hackerman-peter" target="_blank" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                <GitHub fontSize="small" />
              </IconButton>
              <IconButton size="small" href="https://www.linkedin.com/in/-liang/" target="_blank" sx={{ color: 'rgba(255,255,255,0.6)' }}>
                <LinkedIn fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
