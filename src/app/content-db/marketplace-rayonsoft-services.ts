export class RayonsoftServicesDb {
    public static RayonsoftServices = {
        strategyAndConsult: {
            pageBanner: {
                mainTitle: 'SERVICES',
                pageParentId: 2,
                pageId: 211,
                title: 'Strategy & Consulting',
                subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
                image: 'assets/images/marketplace/services/services-3.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Lit',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Rayonsoft Strategy',
                        scrollTo: 'rayonsoft-strategy'
                    },
                    {
                        position: 1,
                        title: 'Our Services',
                        scrollTo: 'our-services-strategy'
                    },
                    {
                        position: 2,
                        title: 'How we do IT',
                        scrollTo: 'how-we-do-strategy'
                    },
                    {
                        position: 3,
                        title: 'Why Rayonsoft',
                        scrollTo: 'why-rayonsoft-strategy'
                    },
                    {
                        position: 4,
                        title: 'Join our team',
                        scrollTo: 'join-out-team-strategy'
                    }
                ]
            },
            rayonStategy: {
                sectionTitle: 'Rayonsoft Strategy',
                id: 'rayonsoft-strategy',
                bgStylePatten: 'image-content-bgPattern19',
                content: [
                    {
                        position: 0,
                        text: `To stay agile in a world dominated by change, the C-suite must keep the core business 
                        running while simultaneously identifying and investing in the new. Rayonsoft Strategy consulting enables
                         leaders to act quickly and confidently as they pivot to the future.`
                    },
                    {
                        position: 1,
                        text: `We bring together leaders in strategy, industry experts, enterprise function practitioners, business
                        intelligence professionals, designers, data scientists, and many other specialized skills to co-create your unique path to transformation.`
                    },
                    {
                        position: 2,
                        text: `Known for our ability to execute at speed, we help clients determine clear,
                        actionable paths to competitive agility by bringing them new thinking on business and technology.`
                    }
                ],
                imageUrl: 'assets/images/marketplace/services/Strategy-3.jpg',
                imagePostion: 'left',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
        },
        howRayonsoftDo: {
            sectionTitle: 'How we do IT',
            subtitle: `Our Strategy help you steer your
             transformation with the latest technology, design thinking and agility,
              while also energizing your legacy systems—at a pace that’s right for your business.`,
            id: 'how-we-do-strategy',
            bgStylePatten: 'image-content-bgPattern19',
            content: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Assigning Right Expertise',
                    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate`
                },
                {
                    icon: 'group',
                    color: 'text-bg-Orange',
                    title: 'Collaboration',
                    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate`
                },
                {
                    icon: 'search',
                    color: 'text-bg-Red',
                    title: 'Finding Right Technology',
                    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate`
                },
                {
                    icon: 'thumb_up', 
                    color: 'text-bg-Light-green',
                    title: 'Better Ideas',
                    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate`
                }
            ],
            imageUrl: 'assets/images/marketplace/services/rayon-do.jpg',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        rayonsoftServices: {
            sectionTitle: 'Our Services',
            id: 'our-services-strategy',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Web and Mobile Applications',
                    subTitle: 'Intelligent Platform Services',
                    text: `Become an intelligent enterprise using solutions from the world's leading technology providers.`,
                    imageUrl: 'assets/images/marketplace/services/service-28.jpg',
                },
                {
                    title: 'Artifical Intelligence',
                    subTitle: 'Intelligent software engineering services',
                    text: `Build systems to drive your business strategy using data, AI, cloud and new technologies.`,
                    imageUrl: 'assets/images/marketplace/services/ai-1.jpg',
                },
                {
                    title: 'Cloud',
                    subTitle: 'Intelligent cloud and infrastructure',
                    text: `Accelerate growth with end-to-end services powered by intelligent automation, security and analytics.`,
                    imageUrl: 'assets/images/marketplace/services/services-13.jpg',
                },
                {
                    title: 'R&D',
                    subTitle: 'Technology Innovation',
                    text: `Shape the future of business and technology through applied technology R&D, rapid prototyping and innovation at scale.`,
                    imageUrl: 'assets/images/marketplace/services/services-18.jpg',
                },
                {
                    title: 'Quality',
                    subTitle: 'Automation Testing',
                    text: `Embraced quality engineering for greater speed and agility.`,
                    imageUrl: 'assets/images/marketplace/services/services-16.jpg',
                },
                {
                    title: 'Security',
                    subTitle: 'Security',
                    text: `Grow confidently and build cyber resilience from the inside out with our innovative cybersecurity services.`,
                    imageUrl: 'assets/images/marketplace/services/services-14.jpg',
                },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        whyRayonsoft: {
            sectionTitle: 'Why Rayonsoft',
            subtitle: 'We help you the critical pieces of a successful technology transformation so you can:',
            id: 'why-rayonsoft-strategy',
            bgStylePatten: 'image-content-bgPattern16',
            content: [
                {
                    title: 'Innovate with agility',
                    text: [
                        {
                            list: `Work with a partner who is part of the new tech ecosystem, and shaping it through a proprietary innovation architecture and powerful R&D engine.`
                        },
                        {
                            list: `Leverage our methods, design thinking and advanced analytics to creatively solve complex business challenges.`
                        },
                        {
                            list: `Tap into our end-to-end capabilities to boost innovation, test, fail fast and scale for growth.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/Strategy-5.jpg',
                },
                {
                    title: 'Build fruitful ecosystem partnerships',
                    text: [
                        {
                            list: `We bring together the right mix of software, services, capabilities and professionals utilizing a tech-agnostic approach to solve your business needs.`
                        },
                        {
                            list: `Our extensive ecosystem of business alliances, universities, tech leaders and startups—combined with our global footprint and delivery center network—provides access to create winning solutions.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/services-28.jpg',
                },
                {
                    title: 'Tap into deep industry expertise',
                    text: [
                        {
                            list: `Get access to more than 9,000 technology consultants from across 40 industries who can apply their technology skills and experiences to any industry challenge.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/services-17.jpg',
                }
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black',
          
        },
        joinUs: {
            sectionTitle: 'Join our team',
            id: 'join-out-team-strategy',
            bgStylePatten: 'image-content-bgPattern18',
        }
    },
        talentAndHumanPotential: {
            pageBanner: {
                mainTitle: 'SERVICES',
                pageParentId: 2,
                pageId: 212,
                title: 'Talent & Organization / Human Potential',
                subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
                image: 'assets/images/marketplace/services/Strategy.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 2,
                        title: 'How We Work',
                        scrollTo: 'how-we-work'
                    },
                    {
                        position: 1,
                        title: 'Challenge',
                        scrollTo: 'rayonsoft-challenge'
                    },
                    {
                        position: 2,
                        title: 'Creating healthy and resilient workforces',
                        scrollTo: 'creating-healthy-resilient'
                    },
                    {
                        position: 3,
                        title: 'What Rayonsoft did',
                        scrollTo: 'what-rayonsoft-did'
                    }
                ]
            },
            challenge: {
                sectionTitle: 'Challenge',
                subTitle: 'A global digital upskilling initiative came into focus',
                id: 'rayonsoft-challenge',
                bgStylePatten: 'image-content-bgPattern20',
                content: [
                    {
                        position: 0,
                        text: `On its journey to secure future growth, Rayonsoft needed to foster innovation.
                         The concept of a relationship with a brand is rapidly evolving.`
                    },
                    {
                        position: 1,
                        text: `Rayonsoft wanted to enhance its systems to
                            better nurture existing talent, pinpoint skills gaps and offer targeted learning programs.
                             By more quickly upskilling its workforce, Rayonsoft could better anticipate customer needs and
                              readily launch new products that engage—and build deeper relationships with consumer and B2B customer microsegments.`
                    },
                ],
                imageUrl: 'assets/images/marketplace/services/talent-2.png',
                imagePostion: 'right',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
        },
        howWeWork: {
            sectionTitle: 'How we work',
            subtitle: `Our Strategy help you steer your
             transformation with the latest technology, design thinking and agility,
              while also energizing your legacy systems—at a pace that’s right for your business.`,
            id: 'how-we-work',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Modern change management',
                    text: `Driving transformation change management outcomes for the C-Suite through leadership, people, cloud, technology, and behavior change.`
                },
                {
                    icon: 'group',
                    color: 'text-bg-Orange',
                    title: 'HR transformation',
                    text: `Equipping HR to provide the workforce with experiences that enable companies to meet business objectives and optimize the full talent ecosystem.`
                },
                {
                    icon: 'search',
                    color: 'text-bg-Red',
                    title: 'Future organization',
                    text: `Leveraging technology and analytics to drive growth and agility through organizational and operating models, and inclusive + diverse cultures.`
                },
                {
                    icon: 'thumb_up', 
                    color: 'text-bg-Light-green',
                    title: 'Talent & new skilling',
                    text: `Leveraging AI and analytics to shape a skilled, digitally fluent workforce that is prepared to unlock new opportunities and drive growth.`
                }
            ],
            imageUrl: 'assets/images/marketplace/services/rayon-do.jpg',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        creatingHealthy: {
            sectionTitle: 'Creating healthy & resilient workforces',
            id: 'creating-healthy-resilient',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    position: 0,
                    text: `In times of crisis, people look to leaders for compassion, care and confidence in navigating the
                     company into the future. When people’s relational, mental and physical needs are met, they will be at their best personally and at work.`
                },
                {
                    position: 1,
                    text: `COVID-19 has increased awareness of mental health issues at home and work.
                     As companies seek to create truly human work experiences, leaders are asking.`
                },
                {
                    position: 3,
                    text: `To help address these concerns, we have
                      provide a blended set of solutions to build human resilience and well-being. We combine our
                      advisory services content and HR networking
                      platform to build resilience at the organization, team and individual levels`
                },
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Consulting & advisory services',
                    text: `Do leaders understand the steps required to shift culture, mindsets and outcomes? Tailored approaches help businesses create sustainable change.`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'Programming & social support',
                    text: `Do you have the tools to build resilience at all levels? Our custom learning solutions enable resilience across leadership, HR and the entire workforce.`
                },
                {
                    icon: 'track_changes',
                    color: 'text-bg-Red',
                    title: 'Custom programs & analytics',
                    text: `Do you have a baseline understanding of employees’ well-being? We use a data-driven transformation approach with our resilience assessment and analytics.`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
                title: 'Building mental & physical resilience',
                subTitle: 'A corporate transformation often meets resistance',
                text: `We can help your organization build human resilience and well-being, enabling your people and your business to survive, thrive and grow.`
            },
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        whatrayonsoftdid: {
            sectionTitle: 'What Rayonsoft did',
            id: 'what-rayonsoft-did',
            bgStylePatten: 'image-content-bgPattern19',
            content: [
                {
                    title: 'Upskilling',
                    text: 'Once the strengths and skills gaps were identified, the team conceptualized job family-specific learning programs.',
                    borderColor: 'border-color-bg-Logo-ColorA1' 
                },
                {
                    title: 'Talent experience',
                    text: `New talent-management processes enable role assessment, performance evaluation and talent lifecycle tracking.`,
                    borderColor: 'border-color-bg-Logo-ColorB1'
                },
                {
                    title: 'Talent sourcing',
                    text: `We created for digital roles within the newly introduced system, connecting the skills required and candidates' CVs.`,
                    borderColor: 'border-color-bg-Logo-ColorC1'
                }
            ],
            bgColor: 'color-bg-Black-1',
            textColor: 'text-bg-Lit',
          
        }
        },
        customerInSight: {
            pageBanner: {
                mainTitle: 'SERVICES',
                pageParentId: 2,
                pageId: 213,
                title: 'Customer Insight & Growth',
                subTitle: 'Personalized platforms, powered by smart technologies are helping businesses stay ahead, driving seamless experiences across the customer journey.',
                image: 'assets/images/marketplace/services/services-6.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Transform',
                        scrollTo: 'rayonsoft-transform'
                    },
                    {
                        position: 1,
                        title: 'Implement Solutions',
                        scrollTo: 'implement-solutions'
                    },
                    {
                        position: 2,
                        title: 'Customer experience',
                        scrollTo: 'customer-experience'
                    },
                ]
            },
            transform: {
                sectionTitle: 'Transform to meet customers on their terms',
                id: 'rayonsoft-transform',
                bgStylePatten: 'image-content-bgPattern21',
                content: [
                    {
                        position: 0,
                        text: `Only 29% of telecom CMOs’ budgets are invested in customer experience.`
                    },
                    {
                        position: 1,
                        text: `73% of customers refer to company websites as a starting point for their customer experience.`
                    },
                    {
                        position: 3,
                        text: `70% of customers prefer messaging over voice, with significant digital engagement increasing over the past 3 years.`
                    },
                ],
                content2: [
                    {
                        icon: 'pie_chart',
                        color: 'text-bg-primary',
                        title: 'Pioneer marketing',
                        text: `When businesses focus early on to understand customer preferences, they will build greater positive and regular engagement across traditional and digital channels.`
                    },
                    {
                        icon: 'insert_chart',
                        color: 'text-bg-Orange',
                        title: 'Driving growth',
                        text: `We help our clients and their customers reach personalized solutions and define, optimize and execute sales and commerce strategies to improve sales effectiveness and drive immediate profitable revenue growth.`
                    },
                    {
                        icon: 'trending_up',
                        color: 'text-bg-Red',
                        title: 'Ongoing service', 
                        text: `A transformed Customer Service capability decreases customer churn, reduces cost to serve and increases service & sales revenue.`
                    }
                ],
                imageContent: {
                    imageUrl: 'assets/images/marketplace/services/service-customer-1.jpg',
                    title: 'Automated Digital Platform',
                    subTitle: 'Intelligent customer engagement solution',
                    text: `We partnered with telecom giant to deliver a highly personalized experience and cost saving automated Platform.`
                },
                imagePostion: 'right',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
            },
            customerExperience: {
                sectionTitle: 'Reimagines the customer experience',
                subTitle: 'AI-powered customer experience incorporates integrated solutions that build a modern operating model',
                id: 'customer-experience',
                bgStylePatten: 'image-content-bgPattern20',
                content: [
                    {
                        position: 0,
                        text: `We implemented effective ways to improve the customer experience on website 
                        by identify the brand personality that company want to have, to encourage customers completing a successful journey.`
                    },
                    {
                        position: 1,
                        text: `Innovative customer service solution that uses artificial intelligence (AI)
                         and intelligent analytics to help customers resolve issues quickly and easily.`
                    },
                ],
                imageUrl: 'assets/images/marketplace/services/talent-1.png',
                imagePostion: 'left',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
        },
        implementSolution: {
            sectionTitle: 'Implement solutions',
            subtitle: `Engagement and personalization are now key for survival yet many businesses are struggling to address critical areas
             in this age of digital customer service. The four requirements of building the service organization of the future are:`,
            id: 'implement-solutions',
            bgStylePatten: 'image-content-bgPattern18',
            content: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Seamless technology ecosystems',
                    text: `Implement tech across multiple vendors through strong technology implementations e.g. blockchain.`
                },
                {
                    icon: 'group',
                    color: 'text-bg-Orange',
                    title: 'Full customer lifecycle visibility',
                    text: `Unleash the power of AI to enable sales and value generation.`
                },
                {
                    icon: 'search',
                    color: 'text-bg-Red',
                    title: 'Differentiated and consistent customer service',
                    text: `Build a workforce of the future through intelligence, automation and hyper personalization.`
                },
                {
                    icon: 'thumb_up', 
                    color: 'text-bg-Light-green',
                    title: 'Local sensibilities with global standards',
                    text: `Focus on the basics and develop tailored customer interactions through technology and field service optimization.`
                }
            ],
            imageUrl: 'assets/images/marketplace/services/customer-1.jpg',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        glance: {
            sectionTitle: 'At a Glance',
            subtitle: 'Full-Stack Expertise, Services and Delivery',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    title: 'Talent services',
                    text: `Whether it’s skilled experts, broad support for a fast-track initiative or a full team to build out your strategy, we’ve got the access and scale to make it happen.`,
                    imageUrl: 'assets/images/marketplace/home/icon-4.png',
                },
                {
                    title: 'Co-led services',
                    text: `You drive; we’ll navigate. Our experts and delivery teams will guide you and help implement your project so you can cross the finish line.`,
                    imageUrl: 'assets/images/marketplace/home/icon-2.png',
                },
                {
                    title: 'Engagement services',
                    text: `For times you don’t need—or want—to own a project. We’re a partner to pilot something new or take noncore functions off your hands. We help you juggle it all.`,
                    imageUrl: 'assets/images/marketplace/home/icon-3.png',
                },
                {
                    title: 'Advisory services',
                    text: `Our thought leaders understand your full technology stack and business DNA to identify opportunities and solutions that simplify the complex.`,
                    imageUrl: 'assets/images/marketplace/home/icon-1.png',
                },
            ],
            bgColor: 'color-bg-Blue-2',
            textColor: 'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff',
        },
        },
        artificalIntelli: {
            pageBanner: {
                mainTitle: 'SERVICES',
                pageParentId: 2,
                pageId: 221,
                title: 'Artifical Intelligence',
                subTitle: 'To take advantage of AI, you have to move beyond proof of concept. Find out how to scale the impact of AI across your business for maximum value.',
                image: 'assets/images/marketplace/services/ai-1.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Lit-1',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Smart strategy',
                        scrollTo: 'ai-smart-strategy'
                    },
                    {
                        position: 1,
                        title: `There's no silver bullet`,
                        scrollTo: 'ai-silver-bullet'
                    },
                    {
                        position: 2,
                        title: 'The code to success',
                        scrollTo: 'ai-code-success'
                    },
                    {
                        position: 3,
                        title: 'Capabilities',
                        scrollTo: 'ai-capabilities'
                    },
                ]
            },
            aiIntro1: {
                sectionTitle: 'Smart strategy',
                id: 'ai-smart-strategy',
                bgStylePatten: 'image-content-bgPattern23',
                content: [
                    {
                        position: 0,
                        text: `Artificial Intelligence (AI) is a constellation of technologies that allows machines to sense, comprehend, act and learn in order to extend human capabilities.
                         In fact, our clients see the greatest gains when humans and machines work together to complement each other's strengths`
                    },
                    {
                        position: 1,
                        text: `As the potential of AI grows every day, so does corporate pressure to use it.
                         But in the rush to implement AI-powered solutions without a larger vision and strategy in place, initiatives often remain siloed with limited ROI potential.`
                    }
                ],
                content2: [
                    {
                        icon: 'verified_user',
                        color: 'text-bg-primary',
                        title: 'Speed to intelligence',
                        text: `Automated integration of data–including real-time data at the edge–to create a single source of truth for your business.`
                    },
                    {
                        icon: 'widgets',
                        color: 'text-bg-Orange',
                        title: 'Speed to confidence',
                        text: `Data governance services, capabilities and ongoing updates to support GDPR, CCPA and other data governance needs.`
                    },
                    {
                        icon: 'track_changes',
                        color: 'text-bg-Red',
                        title: 'Speed to value',
                        text: `Flexible components that work with existing technology for a seamless experience and cost savings.`
                    },
                    {
                        icon: 'track_changes',
                        color: 'text-bg-Red',
                        title: 'Speed to scale',
                        text: `Prebuilt, customizable solutions designed to plug into and across the enterprise.`
                    }
                ],
                imageContent: {
                    imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
                    title: 'Artificial Intelligence',
                    subTitle: 'Ready. Set. Scale.',
                    text: `We master the proven success factors that help businesses multiply value from their AI projects.`
                },
                imagePostion: 'left',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
            },
            aiIntro2: {
                sectionTitle: `There's no silver bullet`,
                subTitle: 'AI strategy and help you scale the impact across your organization',
                id: 'ai-silver-bullet',
                bgStylePatten: 'image-content-bgPattern20',
                content: [
                    {
                        position: 0,
                        text: `Your AI is only as good as the insights that fuel it. 
                        Applied Intelligence delivers AI services together with analytics and automation solutions to fully articulate your unique AI strategy
                         and help you scale the impact across your organization.`
                    },
                    {
                        position: 1,
                        text: `Leveraging AI in pockets across your business has the power
                         to bring new outcomes—from gains in efficiency to productivity.
                          But what if you could transform every aspect of your business and your industry at large.`
                    },
                ],
                imageUrl: 'assets/images/marketplace/services/talent-2.png',
                imagePostion: 'right',
                bgColor: 'color-bg-Lit',
                
                textColor: 'text-bg-Black'
        },
        aiIntro3: {
            sectionTitle: 'The code to success',
            subtitle: 'Our big-picture approach is based on several key factors that we believe are essential to any AI implementation',
            bgStylePatten: 'image-content-bgPattern23',
            id: 'ai-code-success',
            content: [
                {
                    title: 'Brains + bots: Human and machine collaboration',
                    text: `Companies achieve more when human creativity and judgement are coupled with the speed and scale of AI.`,
                    imageUrl: 'assets/images/marketplace/home/icon-4.png',
                },
                {
                    title: 'Responsible AI',
                    text: `AI should benefit users, communities and society at large, guided by core principles that help deliver desired outcomes while engendering trust.`,
                    imageUrl: 'assets/images/marketplace/home/icon-2.png',
                },
                {
                    title: 'Cultural change management',
                    text: `Drive adoption and change across all functions and levels with the right training, tools and processes.`,
                    imageUrl: 'assets/images/marketplace/home/icon-3.png',
                },
                {
                    title: 'End-to-end integration',
                    text: `Instead of focusing on a single algorithm or tool, consider the overall business, process or function.`,
                    imageUrl: 'assets/images/marketplace/home/icon-1.png',
                },
            ],
            bgColor: 'color-bg-Blue-2',
            textColor: 'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff',
        },
        aiIntro4: {
            sectionTitle: 'Capabilities',
            subtitle: 'Our deep industry expertise combined with advanced analytics, automation and AI services helps you operate with agility from front office to back office.',
            id: 'ai-capabilities',
            bgStylePatten: 'image-content-bgPattern16',
            content: [
                {
                    title: 'Minimize unintended bias',
                    text: [
                        {
                            list: `Build responsibility into your AI to ensure that the algorithms – and underlying data – are as unbiased and representative as possible.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/Strategy-5.jpg',
                },
                {
                    title: 'Ensure AI transparency',
                    text: [
                        {
                            list: `To build trust among employees and customers, develop explainable AI that is transparent across processes and functions.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/services-28.jpg',
                },
                {
                    title: 'Protect the privacy and security of data',
                    text: [
                        {
                            list: `Leverage a privacy and security-first approach to ensure personal and/or sensitive data is never used unethically.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/services-17.jpg',
                }
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black',
          
        },
        },
        blockChain: {
            pageBanner: {
                mainTitle: 'SERVICES',
                pageParentId: 2,
                pageId: 222,
                title: 'Block Chain',
                subTitle: `It's changing the future as we speak—but where do you start? Harness Blockchain with real-world applications from the leaders in distributed ledger technologies.`,
                image: 'assets/images/marketplace/services/blockchain-2.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Blockchain',
                        scrollTo: 'blockchian-intro-1'
                    },
                    {
                        position: 1,
                        title: `Value of blockchain`,
                        scrollTo: 'blockchian-intro-2'
                    },
                    {
                        position: 2,
                        title: 'The code to success',
                        scrollTo: 'blockchian-intro-3'
                    },
                    {
                        position: 3,
                        title: 'Capabilities',
                        scrollTo: 'blockchian-intro-4'
                    },
                ]
            },
            blockIntro1: {
                sectionTitle: `Blockchain`,
                subTitle: 'A solutions for frictionless business',
                id: 'blockchian-intro-1',
                bgStylePatten: 'image-content-bgPattern20',
                content: [
                    {
                        position: 0,
                        text: `Blockchain is changing the way the world lives and works
                         – but it's only a means to an end, not the end itself.
                          We can help you apply this technology to drive your transformation into the future.`
                    },
                    {
                        position: 1,
                        text: `Leveraging AI in pockets across your business has the power
                         to bring new outcomes—from gains in efficiency to productivity.
                          But what if you could transform every aspect of your business and your industry at large.`
                    },
                ],
                imageUrl: 'assets/images/marketplace/services/talent-2.png',
                imagePostion: 'left',
                bgColor: 'color-bg-Lit',
                
                textColor: 'text-bg-Black'
            },
            blockIntro2: {
                sectionTitle: 'Rayonsoft strategy',
                id: 'blockchian-intro-2',
                bgStylePatten: 'image-content-bgPattern23',
                content: [
                    {
                        position: 0,
                        text: `Rayonsoft is dedication to digital identity innovations from biometric- and blockchain-based digital identity, shared homomorphic encryption, and interoperability to technical architecture blueprints and security has delivered a significant number of mature production implementations`
                    },
                    {
                        position: 1,
                        text: `The company’s. deep industry knowledge, blockchain-specific security infrastructure services, and strong partner ecosystem including Hyperledger, the Enterprise Ethereum Alliance and Corda — as well as partnerships with IBM Global Technology Services, Microsoft and Amazon Web Services.`
                    }
                ],
                content2: [
                    {
                        icon: 'help',
                        color: 'text-bg-Logo-ColorA3',
                        title: 'What It Is',
                        text: `Blockchain is a database system that maintains and records data in a way that allows multiple organizations and individuals to confidently share access to the same data in real-time, while mitigating concerns around security, privacy and control.`
                    },
                    {
                        icon: 'memory',
                        color: 'text-bg-Logo-ColorB3',
                        title: 'Why It Matters',
                        text: `This capability creates whole new ways of thinking about how to transform processes, drive resiliency across complex networks like supply chains, facilitate trust, verify the digital identity of people and objects, and build new revenue models.`
                    },
                    {
                        icon: 'show_chart',
                        color: 'text-bg-Logo-ColorC3',
                        title: `Where It's Going`,
                        text: `Through a combination of blockchain, biometrics and identity, tokenization, confidential compute and a variety of other technologies also in use today, we are connecting networks of collaborative ecosystems that increase transparency and nimbleness.`
                    },
                ],
                imageContent: {
                    imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
                    title: 'Blockchain solutions',
                    subTitle: 'Ready. Set. Scale.',
                    text: `As the leading independent technology organization, we integrate alliances, partnerships, and leaders from every aspect of the blockchain ecosystem. The goal? To bring the right combination of capabilities to your unique infrastructure, challenges and strategic vision`
                },
                imagePostion: 'right',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
            },
            blockIntro3: {
                sectionTitle: 'The code to success',
                subtitle: 'Our big-picture approach is based on several key factors that we believe are essential to any AI implementation',
                bgStylePatten: 'image-content-bgPattern23',
                id: 'blockchian-intro-3',
                content: [
                    {
                        title: 'Strategy assessment',
                        text: `We'll assess your goals and evaluate blockchain's applicability and business impact to help you define and prioritize your transformation..`,
                        imageUrl: 'assets/images/marketplace/home/icon-4.png',
                    },
                    {
                        title: 'Solution design',
                        text: `Holistic solution design encompasses people, process, operating model and technology to maximize your transformation across your business.`,
                        imageUrl: 'assets/images/marketplace/home/icon-2.png',
                    },
                    {
                        title: 'Build & implementation',
                        text: `Complex implementation management, third-party integration and custom coding assures each solution fits within existing systems to meet future demand.`,
                        imageUrl: 'assets/images/marketplace/home/icon-3.png',
                    },
                    {
                        title: 'Assets & solutions',
                        text: `Proprietary software add-ons, such as redaction, key management and hardware security modules, give you greater control and customization.`,
                        imageUrl: 'assets/images/marketplace/home/icon-1.png',
                    },
                ],
                bgColor: 'color-bg-Blue-2',
                textColor: 'text-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
            },
            blockIntro4: {
                sectionTitle: 'Capabilities',
                id: 'blockchian-intro-4',
                bgStylePatten: 'image-content-bgPattern21',
                content: [
                    {
                        title: 'Financial',
                        subTitle: 'Financial services infrastructure',
                        text: `Blockchain empowers businesses to reimagine how financial transactions are processed, from payments to post-trade processing.`,
                        imageUrl: 'assets/images/marketplace/services/service-28.jpg',
                    },
                    {
                        title: 'Supply Chain',
                        subTitle: 'Blockchain for supply chain',
                        text: ` Streamline your supply chain by moving products to consumers with security and transparency.`,
                        imageUrl: 'assets/images/marketplace/services/ai-1.jpg',
                    },
                    {
                        title: 'Digital',
                        subTitle: 'Blockchain for digital identity',
                        text: `Biometrics and blockchain-based proof of identity give users more mobility, security and control.`,
                        imageUrl: 'assets/images/marketplace/services/services-13.jpg',
                    },
                    {
                        title: 'Security',
                        subTitle: ' Blockchain security',
                        text: `Integrate your existing infrastructure with any blockchain platform to generate and protect digital keys.`,
                        imageUrl: 'assets/images/marketplace/services/services-14.jpg',
                    },
                    {
                        title: 'Real-time',
                        subTitle: ' Real-time gross settlement',
                        text: `Platform for faster, more efficient, reliable and secure payments between banks and customers.`,
                        imageUrl: 'assets/images/marketplace/services/services-16.jpg',
                    }
                ],
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
            },
        },

        cloud: {
            pageBanner: {
                mainTitle: 'SERVICES',
                pageParentId: 2,
                pageId: 223,
                title: 'Cloud',
                subTitle: 'Speed, cost, and innovation–Rayonsoft Cloud First makes cloud’s promise real.',
                image: 'assets/images/marketplace/services/services-13.jpg',
                textColor: 'text-bg-White',
                bgColor: 'color-bg-Blue-2',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Cloud is today’s..',
                        scrollTo: 'cloud-intro-1'
                    },
                    {
                        position: 1,
                        title: `Strategy and Architecture`,
                        scrollTo: 'cloud-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Application Transformation',
                        scrollTo: 'cloud-intro-3'
                    },
                ],
        },
        cloudIntro1: {
            sectionTitle: `Today’s business imperative`,
            subTitle: `Today, more than ever, companies need to operate and compete at an unprecedented speed and scale as industries are reshaping beneath them.
             This means innovating faster, creating new revenue streams, deriving more insights from data – and from the edge – and interacting differently with their customers, partners`,
            id: 'cloud-intro-1',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Migrate and scale up',
                    text: `Cloud value is an essential requirement for digital transformation. 
                    Migrating enterprise workloads to the cloud is the first step. Successful migrations improve the efficiency and 
                    resilience of IT systems and enable the business to do new things—and to do them faster.`
                },
                {
                    title: 'Get the most from the hyperscalers',
                    text: `Apply the innovations and investments from the big cloud providers to create value for your business.
                    Be clear on your cloud objectives and target your approach before considering which hyperscalers will work best for your business.
                     Getting value from your chosen hyperscalers means engaging early and committing to the platform.`
                },
                {
                    title: 'Run and optimize',
                    text: `Ramp up your organizational speed and agility by restructuring architectures, applications and data for cloud. 
                    Getting value in the cloud means optimizing in several key areas, including innovation, consumption, cost and performance. 
                    Companies can benefit from working with third parties for their cloud management and optimization needs.`
                },
                {
                    title: 'Modernize and accelerate',
                    text: `Maximizing long-term value in the cloud depends on modernizing applications, infrastructure and data architecture. 
                    Strategies for success include focusing on value, aligning the organization behind the program and considering third-party tools carefully.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Blue-2',
                bgColor: 'color-bg-Blue-2',
                textColor: 'text-bg-White',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        cloudIntro2: {
            sectionTitle: 'Strategy and Architecture',
            id: 'cloud-intro-2',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    position: 0,
                    text: `You don’t need a cloud-first strategy, you need a cloud-smart strategy. 
                    Key platform decisions, countless configuration options and far-reaching technology implications make adoption a tricky road..`
                },
                {
                    position: 1,
                    text: `A partner with a full-stack perspective can help you gauge the landscape and avoid pitfalls. We have deep experience in cloud,
                     and beyond, from applications to networks to security. And because complexity demands flexibility, we won’t try to box you into a rigid delivery model.`
                },
                {
                    position: 3,
                    text: `The outcome? A custom cloud that breathes new agility into your business`
                },
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Strategy',
                    text: `Cloud adoption can help you overcome complexity—but first you have to face complexity head-on. 
                    Need guidance? We can jump in to create your roadmap or figure out how much your cloud move will cost. 
                    Our iterative and flexible approach helps you get what you need, 
                    without getting stuck in a planning rut. Let’s build a cloud stack that lets you run at full velocity.`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'Cloud Build, Migration and Development',
                    text: `Get niche-provider attention with big-box scale. We have technology depth in-house and execution breadth at our fingertips.
                     Fueled by North America’s largest IT staffing engine, we engage the brightest talent to deliver where you are, and in whatever form you need.`
                },
                {
                    icon: 'track_changes',
                    color: 'text-bg-Red',
                    title: 'Managed Cloud',
                    text: `Streamline your operations. We can manage and support your cloud applications, infrastructure and platform 24×7. Responsibility never sleeps, but you can..`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
                title: 'DevOps and Automation ',
                subTitle: 'A Catalysts for activating your cloud potential',
                text: `Faster release cycles mean happier customers and more revenue, but it takes a streamlined organization and tech stack to achieve that momentum.
                 With a focus on organizational elasticity and technical efficiencies, our DevOps expertise can help you reinvent your business for speed and agility.`
            },
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        cloudIntro3: {
            sectionTitle: 'Application Transformation',
            subTitle: 'A global digital upskilling initiative came into focus',
            id: 'cloud-intro-3',
            bgStylePatten: 'image-content-bgPattern20',
            content: [
                {
                    position: 0,
                    text: `Build resiliency and speed by updating your applications for the cloud. Whether you’re looking for microservices or container architecture,
                     cloud-native development or a partner to replatform or rearchitect your legacy applications, we’re here to deliver what you need—quickly and reliably.`
                },
                {
                    position: 1,
                    text: `projects are led by applications experts and bolstered by centers of excellence across five on-shore and off-shore delivery centers,
                     and we use an agile approach for applications development. Shed the deadweight and move faster.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/talent-2.png',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
    },
    },
        // iot: {
        //     pageBanner: {
        //         mainTitle: 'SERVICES',
        //         title: 'IoT',
        //         pageParentId: 2,
        //         pageId: 223,
        //         subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
        //         image: 'assets/images/marketplace/services/iot-3.jpg',
        //         textColor: 'text-bg-Black',
        //         bgColor: 'color-bg-Lit-4',
        //         gridStrokeColor: '#AAAAAA',
        //         lineStrokeColor: '#FFAB00',
        //         enableQuickNav: true
        //     }
        // },
        // sap: {
        //     pageBanner: {
        //         mainTitle: 'SERVICES',
        //         title: 'SAP',
        //         pageParentId: 2,
        //         pageId: 224,
        //         subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
        //         image: 'assets/images/marketplace/services/services-27.jpg',
        //         textColor: 'text-bg-Lit',
        //         bgColor: 'color-bg-Black-1',
        //         gridStrokeColor: '#AAAAAA',
        //         lineStrokeColor: '#FFAB00',
        //         enableQuickNav: true
        //     }
        // },
        // serviceNow: {
        //     pageBanner: {
        //         mainTitle: 'SERVICES',
        //         title: 'Service Now',
        //         pageParentId: 2,
        //         pageId: 225,
        //         subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
        //         image: 'assets/images/marketplace/services/services-32.jpg',
        //         textColor: 'text-bg-Lit',
        //         bgColor: 'color-bg-Blue-3',
        //         gridStrokeColor: '#AAAAAA',
        //         lineStrokeColor: '#FFAB00',
        //         enableQuickNav: true
        //     }
        // },
        // workday: {
        //     pageBanner: {
        //         mainTitle: 'SERVICES',
        //         title: 'Workday',
        //         pageParentId: 2,
        //         pageId: 226,
        //         subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
        //         image: 'assets/images/marketplace/services/services-28.jpg',
        //         textColor: 'text-bg-Black',
        //         bgColor: 'color-bg-Lit-2',
        //         gridStrokeColor: '#AAAAAA',
        //         lineStrokeColor: '#FFAB00',
        //         enableQuickNav: true
        //     }
        // },
        microsoft: {
            pageBanner: {
                mainTitle: 'SERVICES',
                title: 'Microsoft',
                pageParentId: 2,
                pageId: 227,
                subTitle: 'The largest global Microsoft practice. Fifteen-time Microsoft Global Alliance SI Partner of the Year. Powered by Avanade. Runs on Microsoft.',
                image: 'assets/images/marketplace/services/service-28.jpg',
                textColor: 'text-bg-Blue-3',
                bgColor: 'color-bg-Blue-5',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#039be5',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Microsoft Partnership',
                        scrollTo: 'micro-intro-1'
                    },
                    {
                        position: 1,
                        title: `Our Microsoft offerings`,
                        scrollTo: 'micro-intro-2'
                    },
                    {
                        position: 2,
                        title: 'The code to success',
                        scrollTo: 'micro-intro-3'
                    },
                ],
        },
        microIntro1: {
            sectionTitle: 'Microsoft Partnership',
            subTitle: 'A global digital upskilling initiative came into focus',
            id: 'micro-intro-1',
            bgStylePatten: 'image-content-bgPattern20',
            content: [
                {
                    position: 0,
                    text: `Our combined service capabilities, global scale and joint solution development helps clients overcome disruption and lead transformation in their industries.`
                },
                {
                    position: 1,
                    text: `Clients around the globe are looking to Rayonsoft and Microsoft new strategies and industry solutions to drive innovation and growth in the digital era.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/talent-2.png',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
    },
        microIntro2: {
            sectionTitle: `Our Microsoft offerings`,
            subTitle: `Bringing combined service capabilities, global scale and joint solution development to help clients overcome disruption and lead transformation in their industries.`,
            id: 'micro-intro-2',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Elastic Digital Workplace for the Microsoft Platform',
                    text: `Explore the document and discover how the Elastic Digital Workplace for Microsoft can help you address
                     six dimensions that are critical when transitioning to a remote workplace environment.`
                },
                {
                    title: 'Migration to Microsoft Azure with Confidence',
                    text: `We can help your business unlock the full promise of the cloud through our unmatched partnership with Microsoft & move your SAP applications on Azure..`
                },
                {
                    title: 'Business Reinvention through the Lens of Data',
                    text: `Together with Microsoft, we help organizations leverage data at scale, improve its quality and unlock its value with applied intelligence.`
                },
                {
                    title: 'Digital Manufacturing and Operations',
                    text: `With Microsoft, we help clients embed intelligence into the very fabric of factories, plants, and sites.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Blue-5',
                bgColor: 'color-bg-Blue-5',
                textColor: 'text-bg-Blue-3',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        microIntro3: {
            sectionTitle: 'The code to success',
            subtitle: 'Our big-picture approach is based on several key factors that we believe are essential to any AI implementation',
            bgStylePatten: 'image-content-bgPattern23',
            id: 'micro-intro-3',
            content: [
                {
                    title: 'Rayonsoft runs on Microsoft',
                    text: `Companies achieve more when human creativity and judgement are coupled with the speed and scale of AI.`,
                    imageUrl: 'assets/images/marketplace/home/icon-4.png',
                },
                {
                    title: 'Responsible AI',
                    text: `AI should benefit users, communities and society at large, guided by core principles that help deliver desired outcomes while engendering trust.`,
                    imageUrl: 'assets/images/marketplace/home/icon-2.png',
                },
                {
                    title: 'Cultural change management',
                    text: `Drive adoption and change across all functions and levels with the right training, tools and processes.`,
                    imageUrl: 'assets/images/marketplace/home/icon-3.png',
                },
                {
                    title: 'End-to-end integration',
                    text: `Instead of focusing on a single algorithm or tool, consider the overall business, process or function.`,
                    imageUrl: 'assets/images/marketplace/home/icon-1.png',
                },
            ],
            bgColor: 'color-bg-Blue-2',
            textColor: 'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff',
        },
        },
        // oracle: {
        //     pageBanner: {
        //         mainTitle: 'SERVICES',
        //         title: 'Oracle',
        //         pageParentId: 2,
        //         pageId: 228,
        //         subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
        //         image: 'assets/images/marketplace/services/services-34.jpg',
        //         textColor: 'text-bg-Blue-3',
        //         bgColor: 'color-bg-Blue-5',
        //         gridStrokeColor: '#AAAAAA',
        //         lineStrokeColor: '#039be5',
        //         enableQuickNav: true
        //     }
        // },
        // angular: {
        //     pageBanner: {
        //         mainTitle: 'SERVICES',
        //         title: 'Angular',
        //         pageParentId: 2,
        //         pageId: 229,
        //         subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
        //         image: 'assets/images/marketplace/services/services-26.jpg',
        //         textColor: 'text-bg-Black',
        //         bgColor: 'color-bg-Lit-0',
        //         gridStrokeColor: '#AAAAAA',
        //         lineStrokeColor: '#FFAB00',
        //         enableQuickNav: true
        //     }
        // },
        // salesforce: {
        //     pageBanner: {
        //         mainTitle: 'SERVICES',
        //         title: 'Salesforce',
        //         subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
        //         image: 'assets/images/marketplace/services/services-33.jpg',
        //         textColor: 'text-bg-Black',
        //         bgColor: 'color-bg-White',
        //         gridStrokeColor: '#AAAAAA',
        //         lineStrokeColor: '#EA80FC',
        //         enableQuickNav: true
        //     }
        // },
        securityService: {
            pageBanner: {
                mainTitle: 'SERVICES',
                title: 'Security Services',
                pageParentId: 2,
                pageId: 231,
                subTitle: 'Wherever your business goes, whoever it works with, you need cybersecurity that covers it all.',
                image: 'assets/images/marketplace/services/services-14.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Lit-3',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00dfc0',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Business resilient',
                        scrollTo: 'security-intro-1'
                    },
                    {
                        position: 1,
                        title: `Capabilities`,
                        scrollTo: 'security-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Our Cyber Fusion Centers',
                        scrollTo: 'security-intro-3'
                    },
                ],
        },
        securityIntro1: {
            sectionTitle: 'Transform to meet customers on their terms',
            id: 'security-intro-1',
            bgStylePatten: 'image-content-bgPattern12',
            content: [
                {
                    position: 0,
                    text: `As your business ecosystem and value chain expand, we work to increase your resilience against cyber threats.`
                },
                {
                    position: 1,
                    text: `Anytime. Anywhere. We create cybersecurity tailored to your specific business needs. We defend against cyberattacks with proactive,
                     focused, industry-relevant threat intelligence to give you the confidence that comes from knowing your business is secure.`
                }
            ],
            content2: [
                {
                    icon: 'pie_chart',
                    color: 'text-bg-primary',
                    title: 'What It Is',
                    text: `A “bend, but don’t break” approach to securing the enterprise that combines the disciplines of cybersecurity, business continuity and enterprise resilience.`
                },
                {
                    icon: 'insert_chart',
                    color: 'text-bg-Orange',
                    title: 'Why It Matters',
                    text: `Cyber Resilient Businesses are able to operate while under persistent threats and sophisticated attacks, enabling them to embrace disruption safely, strengthen customer trust and boost shareholder value.`
                },
                {
                    icon: 'trending_up',
                    color: 'text-bg-Red',
                    title: `Where It's Going`, 
                    text: `Cyber Resilient Businesses will elevate the role of security in the organization, require leaders to communicate its importance and manage its application, and ensure all employees participate in its success.`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/services/customer-1.jpg',
                title: 'Automated Digital Platform',
                subTitle: 'Intelligent customer engagement solution',
                text: `We partnered with telecom giant to deliver a highly personalized experience and cost saving automated Platform.`
            },
            imagePostion: 'right',
            bgColor: 'color-bg-Lit-3',
            textColor: 'text-bg-Black'
        },
        securityIntro2: {
            sectionTitle: `Capabilities`,
            subTitle: `Our broad cybersecurity knowledge and deep industry expertise allow us to develop next-gen cybersecurity services to protect your business, from end to end.`,
            id: 'security-intro-2',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Cyber Defense',
                    text: `Helping clients achieve a resilient cyber defense posture to continue operating their businesses regardless of the cyber threats they face.`
                },
                {
                    title: 'Advanced Attack and Readiness Operations',
                    text: `Prepare your business against the most advanced cyber adversaries and reduce your exposure to threats targeting applications, hardware (OT/IOT) and enterprise assets.`
                },
                {
                    title: 'Cyber Operations & Resilience',
                    text: `Together with Microsoft, we help organizations leverage data at scale, improve its quality and unlock its value with applied intelligence.`
                },
                {
                    title: 'Application Security Advisory Services',
                    text: `Protect and monitor applications through data security and privacy, API security, enterprise application security and secure application development.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Blue-2',
                bgColor: 'color-bg-Blue-2',
                textColor: 'text-bg-White',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        securityIntro3: {
            sectionTitle: 'Our Cyber Fusion Centers',
            subtitle: 'Combining managed security services, market-leading advanced analytics and intelligent automation, our cyber defense incubation centers help organizations out-innovate attackers every single day',
            id: 'security-intro-3',
            bgStylePatten: 'image-content-bgPattern16',
            content: [
                {
                    title: 'Houston Cyber Fusion Center',
                    text: [
                        {
                            list: `Rayonsoft's purpose-built, one-of-a-kind Cyber Fusion Center for operational technology (OT) security and industrial control systems (ICS).`
                        },
                        {
                            list: `Customize IT/OT integrations with confidence in our move-in ready secure bay access lab, equipped with fully functional control systems and equipment..`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/Strategy-5.jpg',
                },
                {
                    title: 'Global Cyber Fusion Centers',
                    text: [
                        {
                            list: `A collective of global security professionals, leading data scientists, renowned academic researchers as well as technology and alliance partners.`
                        },
                        {
                            list: `Our ecosystem is continuously incubating and experimenting at full speed and scale—and their innovative thinking is your fastest route to disruptive, next-generation cybersecurity services that can help you overcome your toughest challenges.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/services-28.jpg',
                },
                {
                    title: 'Connect. Collaborate. Innovate.',
                    text: [
                        {
                            list: `Our state-of-the-art Cyber Fusion Centers across the globe offer direct access to multidisciplinary collaboration and our broad range of strategic, transformational and operational security capabilities. It’s where we combine managed security services, market-leading advanced analytics, intelligent automation technologies and integrated cyber defense services to help organizations out-innovate attackers, every single day.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/services-17.jpg',
                }
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black',
        }
        },
        qualityAssurance: {
            pageBanner: {
                mainTitle: 'SERVICES',
                title: 'Quality Engineering Services',
                pageParentId: 2,
                pageId: 232,
                subTitle: 'An AI-led, analytics-driven approach to software and application quality – for success in the digital world',
                image: 'assets/images/marketplace/services/services-16.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00dfc0',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Reimagining software testing',
                        scrollTo: 'quality-intro-1'
                    },
                    {
                        position: 1,
                        title: `Capabilities`,
                        scrollTo: 'quality-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Fresh look',
                        scrollTo: 'quality-intro-3'
                    },
                    {
                        position: 3,
                        title: 'QE transformation',
                        scrollTo: 'quality-intro-4'
                    },
                ],
        },
        qualityIntro1: {
            sectionTitle: `Reimagining user experiences with software testing`,
            subTitle: `As enterprises look to software as a source of competitive advantage, they demand quality—at speed and scale.`,
            id: 'quality-intro-1',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Touchless Testing Platform',
                    text: `A fully automated, touchless approach to quality engineering—powered by AI and analytics—to bring software to market faster and with higher quality.
                    we have the right skills and capabilities to help you succeed`
                },
                {
                    title: 'Omni-Channel Testing Platform',
                    text: `Your end-user experience should be seamless, no matter the interface. Fast-track your digital application testing while improving market potential. 
                    Our Quality Engineering services are designed to power speed, quality and productivity with an intelligence- and insights-driven approach.`
                },
                {
                    title: 'Rayonsoft myWizard ®',
                    text: `With myWizard, you can move beyond productivity and cost reduction to focus on infusing greater speed and intelligence into your applications.
                    With our experience, our quality engineering professionals bring diverse skills across QA, automation, continuous testing, DevOps and Agile to many clients globally.`
                }
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Blue-2',
                bgColor: 'color-bg-Blue-2',
                textColor: 'text-bg-White',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        qualityIntro2: {
            sectionTitle: `Capabilities`,
            subTitle: `We offer the complete range of Quality Engineering services for a broad array of client needs—across digital, custom, packaged and emerging tech applications—to increase speed and agility to market while providing differentiated user experiences.`,
            id: 'quality-intro-2',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Quality Transformationm',
                    text: `Reinventing quality with an intelligence-driven mindset and re-engineered workforce.`
                },
                {
                    title: 'Application Quality Assurance',
                    text: `Powering speed, quality and productivity with an automated, AI-led and analytics-driven approach to quality for systems and applications.`
                },
                {
                    title: 'Specialized Testing',
                    text: `Enabling human-centric, digital experiences across smart, connected technologies. Our Quality Engineering services are underpinned by proprietary platforms and assets that bring together leading open source, commercial and Rayonsoft tools and algorithms.`
                }
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Blue-2',
                bgColor: 'color-bg-Blue-2',
                textColor: 'text-bg-White',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        qualityIntro3: {
            sectionTitle: 'Taking a fresh look at Quality Engineering',
            subtitle: `Explore how modern testing is shifting away from the traditional approach in five key areas—data, frameworks, process, technology and the organization—towards new ideas and new methodologies fit for the application engineering world of tomorrow.`,
            id: 'quality-intro-3',
            bgStylePatten: 'image-content-bgPattern19',
            content: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Applied Analytics',
                    text: `A new vision for the quality engineering function—one that positions quality engineers to be catalysts for speed.`
                },
                {
                    icon: 'group',
                    color: 'text-bg-Orange',
                    title: 'Beyond Devops',
                    text: `DevOps and intelligent automation, delivery timelines have shrunk from months to weeks.`
                },
                {
                    icon: 'search',
                    color: 'text-bg-Red',
                    title: 'Real-Time AI-Driven Monitoring & Integration',
                    text: `Merging of development and testing into a single continuous activity, influx of vast amounts of data and emergence on new technologies have made the quality engineer’s role far more exciting but also complex.`
                },
                {
                    icon: 'thumb_up', 
                    color: 'text-bg-Light-green',
                    title: 'Self Managing',
                    text: `Agility and business performance while achieving radical productivity. With our experience, our quality engineering professionals bring diverse skills across QA, automation, continuous testing, DevOps and Agile to many clients globally.`
                }
            ],
            imageUrl: 'assets/images/marketplace/services/rayon-do.jpg',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        qualityIntro4: {
            sectionTitle: 'QE transformation at scale',
            bgStylePatten: 'image-content-bgPattern16',
            id: 'quality-intro-4',
            content: [
                { 
                    text: 'Insurance company achieve end-to-end quality engineering transformation to support automated, continuous testing at scale as the company makes a seamless shift to Agile and DevOps methods of application development.', 
                    author: 'CHUBB', 
                    position: 'General Director', 
                    image: 'assets/images/others/user.jpg' 
                },
                { 
                    text: 'The transformation also encompassed re-engineering testing talent, defining a new Quality Engineer role with dedicated career path.', 
                    author: 'VERIZON', 
                    position: 'General Director', 
                    image: 'assets/images/others/user.jpg' 
                },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#039be5',
        }
        },
        enterpriseServices: {
            pageBanner: {
                mainTitle: 'SERVICES',
                title: 'Enterprise Services',
                pageParentId: 2,
                pageId: 233,
                subTitle: 'We help envision and execute your end-to-end transformation at speed and at scale',
                image: 'assets/images/marketplace/services/services-18.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by service',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Innovation',
                        scrollTo: 'enterprise-intro-1'
                    },
                    {
                        position: 1,
                        title: `Intelligent platforms`,
                        scrollTo: 'enterprise-intro-2'
                    },
                    {
                        position: 2,
                        title: 'End-to-end application services',
                        scrollTo: 'enterprise-intro-3'
                    }
                ],
        },
        enterpriseIntro1: {
                sectionTitle: 'Innovation-led applications services',
                id: 'enterprise-intro-1',
                bgStylePatten: 'image-content-bgPattern23',
                content: [
                    {
                        position: 0,
                        text: `To be the disruptor and not the disrupted, you need to put innovation at the heart of your applications,
                         but finding a practical path to doing so is far from straightforward. For most companies, complex application landscapes—with a mix of legacy systems,
                         digital and SaaS—consume too large a share of IT resources and restrict their ability to drive digital growth.`
                    },
                    {
                        position: 1,
                        text: `Our innovation-led approach to application services helps you to reinvent your enterprise application portfolio,
                         making use of emerging technology and building with speed and agility to enable you to meet business needs, now and in the future.`
                    }
                ],
                content2: [
                    {
                        icon: 'verified_user',
                        color: 'text-bg-primary',
                        title: 'Speed to intelligence',
                        text: `Transform applications to outperform in a cloud-first, mobile-first world while modernizing legacy enterprise applications to accelerate to the pace of business.`
                    },
                    {
                        icon: 'widgets',
                        color: 'text-bg-Orange',
                        title: 'Speed to confidence',
                        text: `Data governance services, capabilities and ongoing updates to support GDPR, CCPA and other data governance needs.`
                    }
                ],
                imageContent: {
                    imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
                    title: 'Technology Vision ',
                    subTitle: 'Architecting a better future',
                    text: `Companies will now be competing on their technology architecture. 
                    Enterprises can custom-tailor every layer of it now, but building and wielding the most competitive stack means thinking differently.
                     Business and technology strategies must become indistinguishable. Whoever gains the upper edge on technology stands to emerge as number one`
                },
                imagePostion: 'left',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
            },
            enterpriseIntro2: {
                sectionTitle: 'Intelligent platforms',
                subtitle: 'We combine the power of leading platforms—SAP, Oracle, Microsoft, Salesforce, Workday and more—with our intelligence, innovation and industry capabilities to drive large-scale',
                id: 'enterprise-intro-2',
                bgStylePatten: 'image-content-bgPattern16',
                content: [
                    {
                        title: 'Salesforce',
                        text: [
                            {
                                list: `Work with a partner who is part of the new tech ecosystem, and shaping it through a proprietary innovation architecture and powerful R&D engine.`
                            },
                            {
                                list: `Leverage our methods, design thinking and advanced analytics to creatively solve complex business challenges.`
                            },
                            {
                                list: `Tap into our end-to-end capabilities to boost innovation, test, fail fast and scale for growth.`
                            }
                        ],
                        imageUrl: 'assets/images/marketplace/services/Strategy-5.jpg',
                    },
                    {
                        title: 'Microsoft',
                        text: [
                            {
                                list: `We bring together the right mix of software, services, capabilities and professionals utilizing a tech-agnostic approach to solve your business needs.`
                            },
                            {
                                list: `Our extensive ecosystem of business alliances, universities, tech leaders and startups—combined with our global footprint and delivery center network—provides access to create winning solutions.`
                            }
                        ],
                        imageUrl: 'assets/images/marketplace/services/services-28.jpg',
                    },
                    {
                        title: 'Oracle',
                        text: [
                            {
                                list: `Get access to more than 9,000 technology consultants from across 40 industries who can apply their technology skills and experiences to any industry challenge.`
                            }
                        ],
                        imageUrl: 'assets/images/marketplace/services/services-17.jpg',
                    }
                ],
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black',
              
            },
            enterpriseIntro3: {
                sectionTitle: 'End-to-end application services',
                subtitle: 'From the development of new applications, through modernization, management and maintenance, we cover all stages of the application lifecycle.',
                bgStylePatten: 'image-content-bgPattern23',
                content: [
                    {
                        title: 'Application modernization',
                        text: `Transform your legacy applications to become more agile and efficient through the power of New IT.`,
                        imageUrl: 'assets/images/marketplace/home/icon-3.png',
                    },
                    {
                        title: 'Architecture',
                        text: `Plan and deliver a foundational technology architecture to maximize scalability and performance.`,
                        imageUrl: 'assets/images/marketplace/home/icon-2.png',
                    },
                    {
                        title: 'Software engineering',
                        text: `Turn innovative ideas into business differentiation with custom capabilities.`,
                        imageUrl: 'assets/images/marketplace/home/icon-4.png',
                    },
                    {
                        title: 'Intelligent automation',
                        text: `Intelligent automation, like RPA (robotic process automation), natural language processing and virtual agents, can help you improve efficiency and productivity in many ways.`,
                        imageUrl: 'assets/images/marketplace/home/icon-1.png ',
                    },
                ],
                bgColor: 'color-bg-Blue-2',
                textColor: 'text-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
            },
        }
    }
}
