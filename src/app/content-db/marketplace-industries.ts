export class IndustriesDb {
    public static Industries = {
        banking: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Banking',
                pageParentId: 3,
                pageId: 311,
                subTitle: 'Banking is more competitive, high-performing and open than ever. See how we’re helping banks win in the digital economy and get ready for what’s next.',
                image: 'assets/images/marketplace/services/Strategy.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Digital economy',
                        scrollTo: 'banking-intro-1'
                    },
                    {
                        position: 1,
                        title: `Banking capabilities`,
                        scrollTo: 'banking-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Steps towards empathetic banking',
                        scrollTo: 'banking-intro-3'
                    }
                ],
        },
        bankingIntro1: {
            sectionTitle: 'Winning in the digital economy',
            subTitle: '',
            id: 'banking-intro-1',
            bgStylePatten: 'image-content-bgPattern20',
            content: [
                {
                    position: 0,
                    text: `The banking industry has never seen more disruption—new, innovative challengers and advanced technologies are
                     changing market structure and taking a bite out of revenues. Banks need to become more relevant and harness digital to drive growth, they must rethink their
                     “North Star” business models and be bold in reorienting their organizations—or they risk being left behind as the industry changes around them.`
                },
                {
                    position: 2,
                    text: `That’s where Rayonsoft Banking comes in. Whether we're helping modernize core banking operations,
                     turn a mobile banking experience into a social one, or reinvent payment and credit models, our banking consulting
                     services empower clients with data-driven insights and the right tools to adopt a mindset fit for today's—and tomorrow’s—digital landscape.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/talent-2.png',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
    },
    bankingIntro2: {
        sectionTitle: `Banking capabilities`,
        subTitle: `We use new technologies to help banks and payment providers take bold steps to thrive in the future.`,
        id: 'banking-intro-2',
        bgStylePatten: 'image-content-bgPattern21',
        content: [
            {
                title: 'Payments',
                text: `We power payments innovation to help banks, payment providers and other players in the value chain win.`
            },
            {
                title: 'Core Banking',
                text: `We build intelligent, connected and flexible core banking systems fit for the future..`
            },
            {
                title: 'Credit',
                text: `We help commercial & retail lenders rebuild credit operations to thrive in the digital economy—and beyond.`
            },
            {
                title: 'Commercial Banking',
                text: `We help commercial banks become agile, data-driven and customer-focused organizations.`
            },
            {
                title: 'Open Banking',
                text: ` It’s a revolution. Tech + regulations are unlocking the banking value chain. How banks acts now will shape their future.`
            },
            {
                title: 'Intelligent Banking Operations',
                text: `Harness the power of human + machine to establish resilient operations that ensure business sustainability.`
            },
            {
                title: '  Cloud services',
                text: `Our full spectrum of digital, analytics and enterprise cloud services can help you stay ahead of the competition.`
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
    bankingIntro3: {
        sectionTitle: 'Steps towards empathetic banking at scale',
        id: 'banking-intro-3',
        bgStylePatten: 'image-content-bgPattern23',
        content: [
            {
                position: 0,
                text: `To scale up empathy, digital banking leaders will accelerate their move to a single, 
                unified distribution model that provides a consistent banking experience across channels. 
                In so doing, empathetic banks will be able to offer a human touch in the moments when it matters the most.`
            },
            {
                position: 1,
                text: `The growing maturity of today’s artificial intelligence and analytics solutions, paired with banking customers’ 
                growing willingness to use digital channels even for complex interactions,
                 offers banking leaders the opportunity to not only offer more personalized services and experiences to each customer, but to do so at scale.`
            }
        ],
        content2: [
            {
                icon: 'verified_user',
                color: 'text-bg-primary',
                title: 'From customer insight to empathetic action',
                text: `Empathetic banks translate customer signals into empathetic actions by integrating data from different sources on a single, real-time platform.`
            },
            {
                icon: 'widgets',
                color: 'text-bg-Orange',
                title: 'From call center to empathetic customer care hub',
                text: `Leading digital banks are augmenting contact centers with artificial intelligence, chat and other digital capabilities.`
            },
            {
                icon: 'track_changes',
                color: 'text-bg-Red',
                title: 'From online transactions to digital empathy',
                text: `Empathetic banks are using tech such as voice recognition, speech analytics and text analytics to understand customers’ emotions at all touchpoints.`
            }
        ],
        imageContent: {
            imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
            title: 'Banking',
            subTitle: 'Banking on empathy',
            text: `Rayonsoft surveyed banks to find out how they use digital banking to engage with their customers in a more human way.`
        },
        imagePostion: 'left',
        bgColor: 'color-bg-Lit',
        textColor: 'text-bg-Black'
    },
        },
        capitalMarket: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Capital Market',
                pageParentId: 3,
                pageId: 312,
                subTitle: 'We help investment banks, asset and wealth managers, and exchanges prepare for the digital future',
                image: 'assets/images/marketplace/industries/finance-3a.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Green-1',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#788b48',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Digital value chains',
                        scrollTo: 'capital-intro-1'
                    },
                    {
                        position: 1,
                        title: `Capital Markets Capabilities`,
                        scrollTo: 'capital-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Accelerating the AI journey',
                        scrollTo: 'capital-intro-3'
                    }
                ],
        },
            capitalIntro1: {
                sectionTitle: 'Digital-enabled capital markets',
                subTitle: '',
                id: 'capital-intro-1',
                bgStylePatten: 'image-content-bgPattern1',
                content: [
                    {
                        position: 0,
                        text: `We're entering a new era in capital markets: A reshaping industry core, technology-led innovation and evolving digital value chains will challenge the business and operating models of every capital markets firm in the years ahead.`
                    },
                    {
                        position: 1,
                        text: `Leveraging global strategies and data-driven insights, our capital markets consulting practice helps firms rethink their business model, manage risk, redefine workplace strategies, improve operational efficiency and more. Discover how we can help you prepare for the digital future.`
                    }
                ],
                imageUrl: 'assets/images/marketplace/industries/finance-10b.png',
                imagePostion: 'left',
                bgColor: 'color-bg-Green-1',
                textColor: 'text-bg-Black'
        },
        capitalIntro2: {
            sectionTitle: `Capital Markets Capabilities`,
            subTitle: `Most wealth managers recognize the benefits of adopting AI yet struggle to scale it across the enterprise and maximize its benefi. 
            Our report reveals where value is being achieved, the common challenges faced and how the next generation of AI could transform the industry.`,
            id: 'capital-intro-2',
            bgStylePatten: 'image-content-bgPattern28',
            content: [
                {
                    title: 'Asset Management',
                    text: `We help investment managers, institutional investors and asset servicers transform operating models and accelerate new growth. 
                    By streamlining and integrating front, middle and back office functions and specialized platforms, improving risk posture and data delivery.`
                },
                {
                    title: 'Wealth Management',
                    text: `Today’s clients expect a whole new kind of experience that’s more informed, more personalized, more transparent;
                    and they want it more quickly than ever before. Firms that rise to the digital challenge capitalize on industry insights,
                    transform their businesses.`
                },
                {
                    title: 'Investment Banking',
                    text: `The investment banking industry is under pressure. Core investment banking revenues have been largely flat for years on an industry level, and given rising costs, firms need to transform in order to succeed again.`
                },
                {
                    title: 'Market Infrastructure',
                    text: `We help exchanges, clearing houses, central securities depositories and custodians develop strategies, technology & operations for the next decade.`
                },
            ],
            imageUrl: 'assets/images/marketplace/industries/finance-5a.PNG',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Green-2',
                bgColor: 'color-bg-Green-2',
                textColor: 'text-bg-White',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        capitalIntro3: {
            sectionTitle: 'Accelerating the AI journey',
            id: 'capital-intro-3',
            bgStylePatten: 'image-content-bgPattern25',
            content: [
                {
                    position: 0,
                    text: `We can envision a path where AI moves beyond current use cases,
                    adding sophistication that fundamentally allows for new ways to interact
                    with clients and transform advisor and firm productivity.`
                },
                {
                    position: 1,
                    text: `Using the right AI tools—such as cloud-based data lakes and data science workbenches with model management—could enable
                    not just data maintenance and consumption but also enhance "trusted AI" governance and model explainability.`
                }
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Trade processing as-a-service',
                    text: `An operations and technology service for trading and treasury entities to help seek an optimized, flexible cost structure based on mutualization.`
                },
                {
                    icon: 'track_changes',
                    color: 'text-bg-Red',
                    title: 'Intelligent operations',
                    text: `Helping clients to set up a durable and flexible operations function to support business strategy through data driven insights for our clients.`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'Risk, resilience & legal entity restructuring',
                    text: `Addressing regulation effectively, enhancing the risk function and aligning legal entities to strategies to help create resilient businesses.`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/industries/finance-6a.PNG',
                title: 'Capital Markets',
                subTitle: 'The new cloud imperative in capital markets',
                text: `Cloud’s scale, resiliency and continuous innovation mean it will likely form a critical part of every future business and technology roadmap.`
            },
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        },
        communication: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Communication & Media Technologies',
                pageParentId: 3,
                pageId: 313,
                subTitle: `Shift to experience-led open platform models to become unstoppable providers
                 of next-generation IP services and immersive customer experiences.`,
                image: 'assets/images/marketplace/industries/communication-6.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'World connects',
                        scrollTo: 'communication-intro-1'
                    },
                    {
                        position: 1,
                        title: `Trending in communication`,
                        scrollTo: 'communication-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Capabilities',
                        scrollTo: 'communication-intro-3'
                    }
                ],
        },
        communicationIntro1: {
            sectionTitle: 'Redefining how the world connects',
            subTitle: '',
            id: 'communication-intro-1',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    position: 0,
                    text: `Rayonsoft helped Verizon to build the fully automated private network onboarding tool for its B2B customers.`
                },
                {
                    position: 1,
                    text: `Overall, businesses believe 5G will make their business more secure (68 percent). 
                    But there are security challenges inherent to 5G network architecture, including user privacy, 
                    number of connected devices, multiple networks, service access and supply chain integrity.`
                },
                {
                    position: 2,
                    text: `Designing and implementing multiple aspects of an innovative new cloud-native
                    operating model. The aim was clear: enable the organization’s speed and agility
                     requirements to completely disrupt the communications industry.`
                }
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
    },
        communicationIntro2: {
            sectionTitle: 'Trending in communications',
            subtitle: 'We help you the critical pieces of a successful technology transformation so you can:',
            id: 'communication-intro-2',
            bgStylePatten: 'image-content-bgPattern18',
            content: [
                {
                    title: 'Structural separation of network infrastructure',
                    text: [
                        {
                            list: `We explore how network separation, executed carefully, can realize incremental value for CSPs looking to invest in long-term growth opportunities`
                        },
                        {
                            list: `Leverage our methods, design thinking and advanced analytics to creatively solve complex business challenges.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/Strategy-5.jpg',
                },
                {
                    title: 'Cloud imperative in Communications',
                    text: [
                        {
                            list: `Explore Rayonsoft’s vision for how CSPs can fully embrace their transformation to the cloud..`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/services/services-28.jpg',
                },
                {
                    title: 'Reinventing customer experience for telcos',
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
        communicationIntro3: {
            sectionTitle: 'Capabilities',
            subtitle: `Our data-driven, open-platform models and agile services are scalable and designed to drive growth across your business..`,
            id: 'communication-intro-3',
            bgStylePatten: 'image-content-bgPattern28',
            content: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Network Services',
                    text: `Accelerate 5G rollout, achieve ultra-lean legacy network management, launch new software-driven network services.`
                },
                {
                    icon: 'group',
                    color: 'text-bg-Orange',
                    title: ' 5G Acceleration Services',
                    text: `A comprehensive set of capabilities to accelerate your evolution to 5G networks and services.`
                },
                {
                    icon: 'search',
                    color: 'text-bg-Red',
                    title: 'Intelligent Advertising Services',
                    text: `Our comprehensive intelligent advertising services can help you grow your advertising business.`
                },
                {
                    icon: 'thumb_up', 
                    color: 'text-bg-Light-green',
                    title: 'Cybersecurity Services',
                    text: `Our full spectrum of digital, analytics and enterprise cloud services to stay ahead of the competition.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/communication-5.PNG',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        },
        consumerGoods: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Consumer Goods',
                pageParentId: 3,
                pageId: 314,
                subTitle: 'It’s time to satisfy fluctuating consumer demands while seizing new growth opportunities in today’s integrated marketplace',
                image: 'assets/images/marketplace/industries/shopping-1.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Blue-6',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 1,
                        title: `Design to margin`,
                        scrollTo: 'consumer-intro-2'
                    },
                    {
                        position: 0,
                        title: 'How we help',
                        scrollTo: 'consumer-intro-1'
                    },
                    {
                        position: 2,
                        title: 'Industry trends',
                        scrollTo: 'consumer-intro-3'
                    }
                ],
        },
        consumerIntro1: {
            sectionTitle: `How we help`,
            subTitle: `With services spanning growth strategy and execution, sales and trade promotion management, marketing, supply chain, and intelligent enterprise enablement we help our clients achieve consumer relevance at pace and in the right scale units.`,
            id: 'consumer-intro-1',
            bgStylePatten: 'image-content-bgPattern28',
            content: [
                {
                    title: 'Remodel the portfolio',
                    text: `Create an innovation agenda to drive disruptive growth.`
                },
                {
                    title: 'Redefine consumer and channel experience',
                    text: `Capture new growth and meet liquid expectations.`
                },
                {
                    title: 'Reinvent operations',
                    text: `Architect the business to be relevant at scale.`
                },
                {
                    title: 'Run an intelligent enterprise',
                    text: `Pivot your business to unlock value faster than ever.`
                },
                {
                    title: 'Develop next-gen IT architecture',
                    text: `Go digital at the core to adapt at speed.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/shopping-2.PNG',
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
        consumerIntro2: {
            sectionTitle: 'Design to margin',
            id: 'consumer-intro-2',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    position: 0,
                    text: `We explore how to deliver new experiences at higher margins than ever before, 
                    integrating growth and efficiency levers and breaking down silos across functions and the broader ecosystem..`
                },
                {
                    position: 1,
                    text: `The growing maturity of today’s artificial intelligence and analytics solutions, paired with banking customers’ 
                    growing willingness to use digital channels even for complex interactions,
                     offers banking leaders the opportunity to not only offer more personalized services and experiences to each customer, but to do so at scale.`
                }
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Product Should Cost',
                    text: `Focus on understanding full transparency of E2E Should Cost (Sourcing, Manufacturing, Delivery) for a set of product configurations and complexities.`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'Product Design Optimization',
                    text: `Learn about the methods and tools to break down data silos and harness the power of data across the entire value chain and the market to achieve new insights for profitable product design`
                },
                {
                    icon: 'track_changes',
                    color: 'text-bg-Red',
                    title: 'Monetizing Innovation',
                    text: ` Learn from an illustrative client story about understanding and analyzing market, pricing and E2E cost dynamics for a product/feature set for maximum margin for a desired market volume.`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
                title: 'Consumer Goods',
                subTitle: 'Industry X',
                text: `Now more than ever it’s time to rethink the Consumer Goods Industry. Learn how to leapfrog your competitors by digitally transforming your operations.`
            },
            imagePostion: 'left',
            bgColor: 'color-bg-Blue-6',
            textColor: 'text-bg-Black'
        },
        consumerIntro3: {
            sectionTitle: 'The consumer industry trends are clear',
            subtitle: 'Our big-picture approach is based on several key factors that we believe are essential to any AI implementation',
            bgStylePatten: 'image-content-bgPattern23',
            id: 'consumer-intro-3',
            content: [
                {
                    title: 'The new reality',
                    text: `Predictable growth and margins are increasingly rare.`,
                    imageUrl: 'assets/images/marketplace/home/icon-4.png',
                },
                {
                    title: 'Retail reinvention',
                    text: `Retail models are reinvented to meet changing consumer behaviors.`,
                    imageUrl: 'assets/images/marketplace/home/icon-2.png',
                },
                {
                    title: 'Liquid expectations',
                    text: `Industry lines blur, and expectations outpace experiences.`,
                    imageUrl: 'assets/images/marketplace/home/icon-3.png',
                },
                {
                    title: 'Purpose first',
                    text: `Leaders need a purpose that aligns with consumers’ values.`,
                    imageUrl: 'assets/images/marketplace/home/icon-1.png',
                },
            ],
            bgColor: 'color-bg-Blue-2',
            textColor: 'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff',
        },
        consumerIntro4: {
            id: 'consumer-intro-4',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    sectionTitle: 'Financial  success is only part of the story',
                    subtitle:  `Consumers are redefining what they value. To meet the demand, the most forward-thinking CPGs
                     are beginning to measure environmental and social
                     progress with a similar level of scrutiny as they would apply to cash, margin and profit.`,
                    content: [
                        {
                            title: '>50%',
                            text: 'Of consumers say they’re making more sustainable choices during COVID-19 and will continue to do so beyond the pandemic.',
                            borderColor: 'border-left-color-bg-primary' 
                        },
                        {
                            title: '60%',
                            text: `Of companies reported focus was on financial performance in 2020 – down from 90% in 2015.`,
                            borderColor: 'border-left-color-bg-primary' 
                        },
                    ],
                },
                {
                    sectionTitle: 'Growth is increasingly found in unfamiliar places',
                    subtitle:  `Historically, the largest CPG companies turned to geographical expansion as a reliable avenue of growth. Now,
                     investment is flowing away from moving into new markets towards developing flexible business models or even entirely new categories.`,
                    content: [
                        {
                            title: '16%',
                            text: 'Of total spend is made up of geographic expansion, down from 67% in 2015.',
                            borderColor: 'border-left-color-bg-Yellow-1' 
                        },
                        {
                            title: '35%',
                            text: `Of M&A spend in 2021 was on adjacent categories and new business models.`,
                            borderColor: 'border-left-color-bg-Yellow-1' 
                        },
                    ],
                },
                {
                    sectionTitle: 'Data shows the way',
                    subtitle:  `The ability to access and extract insights from different forms of consumer data will separate the leaders from the followers. But it isn’t easy. To succeed, companies must capture deep insights about customers and demand..`,
                    content: [
                        {
                            title: '89%',
                            text: 'Of CPG executives view data and artificial intelligence as an enabler of their strategic priorities.',
                            borderColor: 'border-left-color-bg-Logo-ColorA3' 
                        },
                        {
                            title: '76%',
                            text: `Of executives agree that organizations need to dramatically reengineer the experiences that bring technology and people together.`,
                            borderColor: 'border-left-color-bg-Logo-ColorA3' 
                        },
                    ],
                }
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        }
        },
        education: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Education',
                pageParentId: 3,
                pageId: 315,
                subTitle: `Preparing the future workforce through Digital tools and platforms virtualized the testing experience for non-profit organization's key stakeholders: test administrators, students and employees.`,
                image: 'assets/images/marketplace/industries/education-3.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'The changing face of education',
                        scrollTo: 'education-intro-1'
                    },
                    {
                        position: 1,
                        title: `Online Testing`,
                        scrollTo: 'education-intro-2'
                    },
                    {
                        position: 2,
                        title: `We serve`,
                        scrollTo: 'education-intro-3'
                    },
                ],
        },
        educationIntro1: {
            sectionTitle: `The changing face of education`,
            subTitle: `Digital-first connected learning paves the way to the future of higher education. Emerging technologies such as analytics, AI and machine learning will be key to hyper personalizing the student experience, helping to identify at-risk learners and provide the most effective support for each person.`,
            id: 'capital-intro-2',
            bgStylePatten: 'image-content-bgPattern28',
            content: [
                {
                    title: 'Modernize the Test Day Experience.',
                    text: `In a pandemic-induced social distancing environment, this requires remote—that is, at home—testing for millions of students annually. 
                    By building custom digital tools and platforms to virtualize the testing experience for all key stakeholders: 
                    test administrators and coordinators, students taking the exam, and employees who support test day`
                },
                {
                    title: 'Our Approach',
                    text: `We walked the client through the process of defining differentiated digital experiences and 
                    identifying tools for test administrators, students and the company’s command center. We determined that 
                    several new software and technology solutions were needed and that enabling these applications required back-end
                     system modernization and a clear roadmap for how to deliver these experiences. `
                },
                {
                    title: 'Workshops ',
                    text: `we conducted online workshops with key stakeholders to brainstorm how to virtualize the testing experience during social distancing.
                     We then developed the technology, including customized web and mobile applications, for test administrators and coordinators to remotely conduct pretest planning, manage virtual test days and complete post-test processes, 
                     all digitally.`
                },
            ],
            imageUrl: 'assets/images/marketplace/industries/education-6.jpg',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Yellow1',
                bgColor: 'color-bg-Yellow1',
                textColor: 'text-bg-Black',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        educationIntro2: {
            id: 'education-intro-2',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    sectionTitle: 'From Onsite to Online Testing',
                    subtitle:  `Coronavirus-related social distancing has not only impacted standard onsite testing, 
                    it has accelerated the client’s plans to create and launch an online testing model. The company is now working toward 
                    a pilot online test event.`,
                    content: [
                        {
                            title: '10+',
                            text: 'testing programs and services',
                            borderColor: 'border-left-color-bg-Yellow1' 
                        },
                        {
                            title: '150 K',
                            text: `Of students tested annually`,
                            borderColor: 'border-left-color-bg-primary' 
                        },
                    ],
                },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        educationIntro3: {
            sectionTitle: 'We serve',
            subtitle: 'We help you the critical pieces of a successful technology transformation so you can:',
            id: 'education-intro-3',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Education Providers',
                    borderColor: 'border-color-bg-Blue-7', 
                    text: [
                        {
                            list: `Education sector domain knowledge with digital expertise to help schools, colleges
                             and universities chart strategies and apply technology to improve student access, experiences and success.
                              Our experience serving the broader education ecosystem make us uniquely positioned to help the education community
                               navigate challenges such as declining enrollments, burdening fixed costs and re-imagining instructional technology.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/industries/education-2.PNG',
                },
                {
                    title: 'Education Publishers',
                    borderColor: 'border-color-bg-Deep-orange', 
                    text: [
                        {
                            list: `We Work with the world’s top education publishers, helping them lead with digital-first products and content.
                             We have proven experience transforming traditional businesses, products and operations designed for modern learning. 
                             Our services help improve profitability and de-risk investments in the platforms, products and programs offered by education
                              publishers and enablers, alike.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/industries/education-5.jpg',
                },
                {
                    title: 'Testing & Assessment Providers',
                    borderColor: 'border-color-bg-primary', 
                    text: [
                        {
                            list: `Industry leading design thinking and digital engineering services help build end-to-end platforms for assessment authoring, delivering, proctoring and reporting to enhance the classroom experience or certification in a professional environment. Cognizant partners with clients to drive new experiences and modernize applications and infrastructure to transform into modern, agile and scalable organizations.`
                        }
                    ],
                    imageUrl: 'assets/images/marketplace/industries/eductaion-4.jpg',
                }
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black',
        },
        },
        healthcare: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Health Care',
                pageParentId: 3,
                pageId: 321,
                subTitle: 'From the back office to the doctor’s office, we help clients deliver more effective, efficient and affordable healthcare with Insight Driven Health.',
                image: 'assets/images/marketplace/industries/health-h.jpg',
                textColor: 'text-bg-White',
                bgColor: 'color-bg-Blue-8',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 2,
                        title: 'Digital health',
                        scrollTo: 'healthcare-intro-1'
                    },
                    {
                        position: 1,
                        title: `Capabilities`,
                        scrollTo: 'healthcare-intro-2'
                    },
                    {
                        position: 0,
                        title: 'The cloud imperative',
                        scrollTo: 'healthcare-intro-3'
                    }
                ],
        },
        healthIntro1: {
            sectionTitle: 'Leaders can make recent digital health gains last',
            subTitle: '',
            id: 'healthcare-intro-1',
            bgStylePatten: 'image-content-bgPattern29',
            content: [
                {
                    position: 0,
                    text: `The global pandemic greatly accelerated the adoption of digital healthcare—but will it persist? 
                    The Rayonsoft 2020 digital health consumer research showed the rapid rise of digital health had stalled. 
                    Now, COVID-19 may serve to resume the growth.`
                },
                {
                    position: 1,
                    text: `With most in-person care visits on hold, use of virtual care services exploded during the crisis. 
                    Nearly overnight, digital healthcare was infused into the clinical workday as patients and providers alike were forced to become fast adopters.`
                },
                {
                    position: 2,
                    text: `As in-person care resumes, providers, payers and consumers can seize the opportunity to maintain the momentum created by
                     forced adoption and address the pre-crisis issues that have previously inhibited digital health adoption.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/health-c.jpg',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
    },
    healthIntro2: {
        sectionTitle: 'Capabilities',
        subTitle: `Our offerings in digital health, operational transformation, consumer experience,
         and high impact consulting help companies deliver personalized, efficient and informed care.`,
        id: 'healthcare-intro-2',
        bgStylePatten: 'image-content-bgPattern23',
        content: [
           {
            imageUrl: 'assets/images/marketplace/industries/health-d.jpg',
            title: 'Health',
            subTitle: ' Operational transformation ', 
            text: `Preparing your health organization for waves of disruption, today and into tomorrow.
            Enabling healthcare enterprises to adopt an agile mindset to deliver future-ready care at the speed of life.
            Our areas of particular interest include neuroscience, oncology, transplant, regenerative medicine and precision medicine — and remote monitoring, virtual care and telehealth models.`
           },
           {
            imageUrl: 'assets/images/marketplace/industries/health-a.jpg',
            title: 'Digital Health',
            subTitle: 'Implementing digital health strategies', 
            text: `Members have access to medical insights, business services, top-tier professional service firms and educational opportunities typically
             only accessible to large-scale innovation or R&D departments Our goal is to bring ideas to benefit people as quickly as possible at scale.
              We want to make a global impact by helping people wherever they are in the world.`
           },
        ],
        bgColor: 'color-bg-Lit',
        textColor: 'text-bg-Black'
    },
    healthIntro3: {
        sectionTitle: 'The cloud imperative in healthcare',
        id: 'healthcare-intro-3',
        bgStylePatten: 'image-content-bgPattern32',
        content: [
            {
                position: 0,
                text: `Two years ago, organizations were experimenting in the public cloud. Now their focus is on migrating legacy technology to the cloud and transforming data and applications using capabilities that aren’t 
                available in their existing infrastructure solutions. Yesterday, cloud was about aspiration. Today, it is about scale. 
               `
            },
            {
                position: 1,
                text: `Cloud is a disruptive force fueling innovation in the industry. Healthtech players 
                with cloud solutions continue to grow as market influencers. In addition, the big three cloud hyperscalers in the North American market—Microsoft,
                 Amazon and Google—have healthcare in their sights and are investing in innovation.`
            }
        ],
        content2: [
            {
                icon: 'verified_user',
                color: 'text-bg-primary',
                title: 'Business leaders have a stake in cloud',
                text: `Every C-suite leader has a vested interest and is looking for a specific kind of value.`
            },
            {
                icon: 'widgets',
                color: 'text-bg-Orange',
                title: 'Cloud service providers are eyeing healthcare',
                text: `Cloud service providers want to expand their health services beyond core IT applications.`
            },
            {
                icon: 'track_changes',
                color: 'text-bg-Red',
                title: 'Public cloud unlocks new value and cuts costs',
                text: `Migrating to cloud at scale can deliver 20 to 40% in annual savings.`
            }
        ],
        imageContent: {
            imageUrl: 'assets/images/marketplace/industries/health-b.jpg',
            title: 'Healthcare',
            subTitle: 'The cloud imperative in healthcare',
            text: `Cloud is no longer a pure technology play in healthcare. It’s a business play.`
        },
        imagePostion: 'right',
        bgColor: 'color-bg-Lit',
        textColor: 'text-bg-Black'
    },
        },
        infoService: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Information Service',
                pageParentId: 3,
                pageId: 322,
                subTitle: 'Harness new growth from information ',
                image: 'assets/images/marketplace/industries/social.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Microenterprises',
                        scrollTo: 'infoService-intro-1'
                    },
                    {
                        position: 1,
                        title: `Focusing`,
                        scrollTo: 'infoService-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Capabilities',
                        scrollTo: 'infoService-intro-3'
                    }
                ],
        },
        infoServiceIntro1: {
            id: 'infoService-intro-1',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    sectionTitle: 'Microenterprises',
                    subtitle:  `A New Growth Strategy for Information Service Providers by treating their processes and workflows as marketable products, information service providers can recast these assets to tap into new revenue opportunities. Here’s how.`,
                    content: [
                        {
                            title: '5.6% in 2018',
                            text: `The information service (IS) industry is at an inflection point. 
                            With successful players boasting long histories and enviable margins, industry revenue grew`,
                            borderColor: 'border-left-color-bg-Orange' 
                        },
                        {
                            title: '$2 billion',
                            text: `According to the Harvard Business Review, gross profits for Haier’s core appliance business grew 23% a year, 
                            and the company market value from new ventures.`,
                            borderColor: 'border-left-color-bg-Lit-Tale-2' 
                        },
                    ],
                },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        infoServiceIntro2: {
            sectionTitle: `Focusing the microenterprise`,
            subTitle: `Adopting a microenterprise structure requires organizations to broaden their strategic imperatives and go-to-market strategy.
             As new opportunities, IS providers can:`,
            id: 'infoService-intro-2',
            bgStylePatten: 'image-content-bgPattern28',
            content: [
                {
                    title: 'Expand into the B2C sector',
                    text: `With the rise of open-access, quality information is no longer restricted to buyers with the deepest pockets. The pay-as-you-go pricing
                     structure at the heart of the microenterprise model makes it a natural fit to offer services directly to individual consumers.`
                },
                {
                    title: 'Diversify into new industries',
                    text: `Microenterprises present a means to expand into new industries when revenue from traditional segments has plateaued. We helped one client, a leading IS company with little presence in
                     the fast-growing business-to-business digital marketing space, tap into its powerful data assets to quickly enter this new market. `
                },
                {
                    title: 'Personalize offerings, courtesy of AI ',
                    text: `For many traditional IS providers, the content purchase represents the end of the customer experience journey. With artificial intelligence (AI)-fueled recommendation engines,
                     IS providers can build on the data trail and patterns of each marketplace transaction to continuously present new or additional offerings.`
                },
            ],
            imageUrl: 'assets/images/marketplace/industries/shopping-4.PNG',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Yellow',
                bgColor: 'color-bg-Yellow',
                textColor: 'text-bg-White',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        infoServiceIntro3: {
            sectionTitle: 'Capabilities',
            subTitle: `Evolving audience needs, varying consumption patterns and relevant insights drive the information economy.
             We deliver offerings and expertise across the information ecosystem to help you update your business model, accelerate innovation, boost agility and meet the rapid demand of digital disruption.`,
            id: 'infoService-intro-3',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
               {
                imageUrl: 'assets/images/marketplace/industries/finance-9a.PNG',
                title: 'Finance',
                subTitle: 'CREDIT, FINANCIAL, TAX, GLOBAL RISK & COMPLIANCE', 
                text: `With rapidly changing customer expectations and a growing number of new entrants to this space,
                 you’re under increasing pressure to re-evaluate your business model, strategies and solution offerings to remain competitive. We can help you shape your business strategy to meet today’s challenges.
                  Our team of domain and technology experts can help you build advanced capabilities—platforms, tools and processes—and attain an enduring competitive advantage in this constantly changing digital era.`
               },
               {
                imageUrl: 'assets/images/marketplace/industries/finance-8a.PNG',
                title: 'Goverance',
                subTitle: 'LEGAL & REGULATORY', 
                text: `The legal services market is facing pressures from changing business models, slowing customer demand, availability of free 
                content and a need to reduce fees. The result is a decline in the demand for paid research—and stagnant growth for legal information providers. Revamp your business model and discover new avenues of growth. Build tools that automate legal services`
               },
               {
                imageUrl: 'assets/images/marketplace/industries/health-d.jpg',
                title: 'Science',
                subTitle: 'SCIENTIFIC, TECHNICAL & MEDICAL', 
                text: `The scientific, technical and medical (STM) market continues to evolve, with greater focus on improving end-user outcomes.
                 Providing smarter content, tools and workflow solutions can make the user experience more intuitive and efficient and less time-consuming.`
               },
               {
                imageUrl: 'assets/images/marketplace/industries/finance-1b.PNG',
                title: 'Capital',
                subTitle: 'MARKET RESEARCH', 
                text: `There’s never been a better time to be in the market research industry. As the volume of content 
                (including user-generated content) continues to explode and consumption channels and consumer patterns keep changing,
                 more companies and brands realize they need expert market researchers to understand the voice of the consumer and position themselves
                  for success.`
               },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        },
        insurance: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Insurance',
                pageParentId: 3,
                pageId: 323,
                subTitle: 'Digital transformation is here. Discover how we help P&C and life insurers redefine their business and operating models and position themselves for growth.',
                image: 'assets/images/marketplace/industries/insurance-1.PNG',
                textColor: 'text-bg-White',
                bgColor: 'color-bg-Lit-Tale-3',
                gridStrokeColor: '#ECEFF1',
                lineStrokeColor: '#e1e2e4',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Value',
                        scrollTo: 'insurance-intro-1'
                    },
                    {
                        position: 1,
                        title: `Insurance reimagined`,
                        scrollTo: 'insurance-intro-2'
                    },
                    {
                        position: 2,
                        title: 'End-to-end application services',
                        scrollTo: 'insurance-intro-3'
                    }
                ],
        },
        insuranceIntro1: {
            id: 'insurance-intro-1',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    sectionTitle: 'Value delivered',
                    subtitle:  `The insurance company was able to cut operating costs and improve productivity. This burst of productivity is due largely to the combination of data, intelligent technologies and talent that allow the team to work faster and more effectively, with less rework required. Since entering its managed service arrangement, the insurance company has:`,
                    content: [
                        {
                            title: '20%',
                            text: `Reduced average handling time for all insurance processes by over 20%.`,
                            borderColor: 'border-left-color-bg-Orange' 
                        },
                        {
                            title: '30%',
                            text: `Cut the turn-around time for claims recovery by 30%.`,
                            borderColor: 'border-left-color-bg-Lit-Tale-2' 
                        },
                        {
                            title: '99%',
                            text: `Processed 99.84% claims within specified turn-around time.`,
                            borderColor: 'border-left-color-bg-Deep-orange' 
                        },
                        {
                            title: '99%',
                            text: `Achieved 99.99% payment accuracy.`,
                            borderColor: 'border-left-color-bg-Green-2' 
                        },
                    ],
                },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        insuranceIntro2: {
            sectionTitle: 'Insurance reimagined',
            id: 'insurance-intro-2',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    position: 0,
                    text: `The insurance industry is at the heart of digital disruption and convergence.
                     Leading insurers are broadening and diversifying their products and services as they align to meet the changing needs of their clients.
                      This includes investing in customer-facing, cloud-based digital innovations and creating unexpected new ecosystems that serve a broad suite of
                       customer needs. Insurance carriers are also reflecting on their role in society, forging sustainability initiatives and championing diversity
                        in their leadership and agents..`
                },
                {
                    position: 1,
                    text: `This is a critical turning point for the industry, and an opportunity to provide meaningful value for customers, 
                    employees and stakeholders. Rayonsoft Insurance has the experience and broad digital expertise to help insurers cultivate agility, 
                    creating seamless digital services for customers and new income streams across the business. `
                }
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Identified insurance processes to be automated',
                    text: `Introduced a proprietary automation identification diagnostic tool (AIDT). Accomplished tasks with recorded and analyzed claims assistants’ actions. Simplified and centralized nearly all claims management`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'Marked opportunities with new diagnostic tool',
                    text: `Automated case assignments. Accelerated routing of important documentation. Helped boost overall claims management performance`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/services/talent-5.jpg',
                title: 'Competitive Agility',
                subTitle: 'Innovate for resilience and new insurance revenue',
                text: `Our Insurance Revenue Landscape 2025 report examines 4 key areas of innovation that offer revenue opportunities for insurers over the next 5 years.`
            },
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        insuranceIntro3: {
            id: 'insurance-intro-3',
            bgStylePatten: 'image-content-bgPattern25',
            content: [
                {
                    sectionTitle: 'Innovate for resilience',
                    subtitle:  `Based on industry recognized forecasts and analyses of more than 70 trends from over 200 sources, 
                    we anticipate major shifts in revenue opportunity. Significant global premiums are likely to be renewed with innovative new
                     products and a shift in distribution towards digital channels or third-party platforms.`,
                    content: [
                        {
                            title: '85%',
                            text: `Historically, customer retention rates have hovered around 85% for most insurers.`,
                            borderColor: 'border-left-color-bg-Yellow1' 
                        },
                        {
                            title: '5%',
                            text: `With the shift to digital channels and third-party platforms, insurers who decline to innovate could see revenue declines of nearly 5%.`,
                            borderColor: 'border-left-color-bg-primary' 
                        }
                    ],
                },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        insuranceIntro4 : {
            sectionTitle: 'Turn emerging risk into exceptional reward',
            subtitle: `The approach we outline in our report can inform a resilient strategy for insurers looking to navigate the new revenue landscape over the next five years. The industry will coalesce around 4 areas of innovation.`,
            id: 'insurance-intro-4',
            bgStylePatten: 'image-content-bgPattern28',
            content: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Health/wellness and life products and services',
                    text: `$120 billion in revenue from smart health products and services, particularly for aging populations, and direct life and wealth management products`
                },
                {
                    icon: 'group',
                    color: 'text-bg-Orange',
                    title: 'Sharing economy, climate change, and cyber threats',
                    text: `$115 billion in revenue from products and services to address new exposures, like climate change, sharing economy asset usage, and bigger cyber threats`
                },
                {
                    icon: 'search',
                    color: 'text-bg-Red',
                    title: 'Integration of tech with traditional P&C products',
                    text: `$120 billion in products and services enabling smart auto, smart home, and smart manufacturing`
                },
                {
                    icon: 'thumb_up', 
                    color: 'text-bg-Light-green',
                    title: 'Shifting premium to alternative distributors',
                    text: `$125 billion from premium shifts to new distributors, like big tech, manufacturers and insurtechs, and direct sales of small commercial insurance`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/finance-8a.PNG',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        }
        },
        lifeScience: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Life Science',
                pageParentId: 3,
                pageId: 324,
                subTitle: `Discover how we're helping companies deliver better patient outcomes through differentiated platforms, consulting, and operations services`,
                image: 'assets/images/marketplace/industries/health-g.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Green-3',
                gridStrokeColor: '#606060',
                lineStrokeColor: '#039be5',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Pivot to the patient',
                        scrollTo: 'lifeScience-intro-1'
                    },
                    {
                        position: 1,
                        title: `Digital transformation`,
                        scrollTo: 'lifeScience-intro-2'
                    },
                    {
                        position: 2,
                        title: `pilot phase`,
                        scrollTo: 'lifeScience-intro-3'
                    },
                    {
                        position: 3,
                        title: 'Capabilities',
                        scrollTo: 'lifeScience-intro-4'
                    }
                ],
        },
        lifeScienceIntro1: {
            sectionTitle: 'Pivot to the patient',
            subTitle: '',
            id: 'lifeScience-intro-1',
            bgStylePatten: 'image-content-bgPattern29',
            content: [
                {
                    position: 0,
                    text: `Life sciences is evolving rapidly from selling products to delivering value through better patient outcomes.`
                },
                {
                    position: 1,
                    text: `We work with our pharmaceutical, biotech, medical technology, distributor and consumer health clients globally to redefine the
                     future of the life sciences industry: combining the latest technology with
                     scientific breakthroughs to revolutionize how medical treatments are discovered, developed and delivered to patients around the world.`
                },
                {
                    position: 2,
                    text: `Biopharma is facing compressive disruption that could impact traditional approaches. 
                    Find out how New Science can reshape the biopharma landscape and deliver better patient outcomes.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/health-c.jpg',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        lifeScienceIntro2: {
            sectionTitle: 'Digital transformation',
            subtitle: `ur survey focused on key areas related to the implementation and adoption of digital technologies in biopharma R&D:
             strategy, value, progress, and barriers to adoption. Although we validated that some progress is being made,
             we did find a greater-than-anticipated gap between the expected value of digital in R&D and actions being taken to realize that value`,
            bgStylePatten: 'image-content-bgPattern23',
            id: 'lifeScience-intro-2',
            content: [
                {
                    title: 'Automation in R&D',
                    text: `Within the research and development lab, previously inaccessible complex and miniaturized assays will become routine and fully automated.`,
                    imageUrl: 'assets/images/marketplace/home/icon-4.png',
                },
                {
                    title: 'Extended reality in QC',
                    text: `In the quality control lab, the use of extended reality (XR) will become commonplace to facilitate tech transfer, train and provide technical support on new methods.`,
                    imageUrl: 'assets/images/marketplace/home/icon-2.png',
                },
                {
                    title: 'Data-driven ways of working',
                    text: `The goal of this phase is to bring the lab into “the new” by implementing a harmonized digital platform upon which true business transformation may occur.`,
                    imageUrl: 'assets/images/marketplace/home/icon-3.png',
                },
                {
                    title: 'Redefine your lab',
                    text: `Now, new scientific business models power an end-to-end data supply chain, deeper adoption of AI, whole lab automation and implementation of in silico methods and simulations.`,
                    imageUrl: 'assets/images/marketplace/home/icon-1.png',
                },
            ],
            bgColor: 'color-bg-Green-3',
            textColor: 'text-bg-Black',
            gridStrokeColor: '#606060',
            lineStrokeColor: '#039be5',
        },
        lifeScienceIntro3: {
            id: 'lifeScience-intro-3',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    sectionTitle: 'Running aground in the pilot phase',
                    subtitle:  `Where are life sciences companies in their digital journey? Our research found that 60% are deploying digital as follows:`,
                    content: [
                        {
                            title: '37%',
                            text: `are piloting—and 63% of those companies have been piloting for six months or more, showing organizations are getting stuck in the pilot stage.`,
                            borderColor: 'border-left-color-bg-Yellow1' 
                        },
                        {
                            title: '13%',
                            text: `are scaling up. 70% of these companies view their efforts as successful or extremely successful, indicating that those who scale up are realizing real business benefit.`,
                            borderColor: 'border-left-color-bg-primary' 
                        }
                    ],
                },
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        lifeScienceIntro4: {
            sectionTitle: 'Capabilities',
            id: 'lifeScience-intro-4',
            bgStylePatten: 'image-content-bgPattern30',
            content: [
                {
                    title: 'Logistics',
                    subTitle: 'Supply Chain',
                    text: `Creating insights driven, transparent, and integrated supply chains.`,
                    imageUrl: 'assets/images/marketplace/services/service-28.jpg',
                },
                {
                    title: 'R&D',
                    subTitle: 'Precision Medicine',
                    text: ` Realizing data-driven, personalized care to treat patients based on their unique genomic characteristics. Helping speed & improve R&D to deliver better outcomes.`,
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
        logistics: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Consumer Goods',
                pageParentId: 3,
                pageId: 325,
                subTitle: 'We help organizations reimagine and transform their supply chains for tomorrow—with a positive impact on the business, on society and on the planet.',
                image: 'assets/images/marketplace/industries/logistics-a.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'The priorities for supply chain',
                        scrollTo: 'logistics-intro-1'
                    },
                    {
                        position: 1,
                        title: `Value delivered`,
                        scrollTo: 'logistics-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Capabilities',
                        scrollTo: 'logistics-intro-4'
                    }
                ],
        },
        logisticsIntro1: {
            sectionTitle: `The priorities for supply chain`,
            subTitle: `To combine resilience and responsibility in supply chains, we recommend companies use their rapid-response command centers to address seven priorities:`,
            id: 'logistics-intro-1',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    title: 'Preserve the extended workforce',
                    text: `Promote the health and wellbeing of supply chain workers, supporting their mental health and emotional needs as well as their physical safety.`
                },
                {
                    title: 'Repurpose your capabilities',
                    text: `Look for ways to repurpose supply chains to help societies manage the urgent challenges of COVID-19. `
                },
                {
                    title: 'Think local',
                    text: `Think creatively about how to reallocate resources to support local communities across the whole supply chain.`
                },
                {
                    title: 'Secure the supply base',
                    text: `Strengthen the security of supply networks to enhance overall resilience and support areas of the supply base at risk from operational and/or financial disruption.`
                },
                {
                    title: 'Respond with confidence and insight',
                    text: `Use analytics, automation, digital platforms and digital twins to model disruption and test out potential responses.`
                },
                {
                    title: 'Learn and evolve',
                    text: `Capitalize on a once-in-a-generation opportunity to identify points of supply chain failure, their root causes, and how they can be strengthened.`
                },
                {
                    title: 'Design for resilience',
                    text: `Keep planning for the investments needed post-crisis building a core digital infrastructure including analytics, that includes the purposeful and responsible features developed during the pandemic.`
                },
            ],
            imageUrl: 'assets/images/marketplace/industries/oil-1.jpg',
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
        logisticsIntro2: {
            id: 'logistics-intro-2',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    sectionTitle: 'Value delivered',
                    subtitle:  `Coronavirus-related social distancing has not only impacted standard onsite testing, 
                    it has accelerated the client’s plans to create and launch an online testing model. The company is now working toward 
                    a pilot online test event.`,
                    content: [
                        {
                            title: '$16M',
                            text: 'In savings delivered through e-tendering and are ready to be invested in technology-led growth across the business over a three-year period.',
                            borderColor: 'border-left-color-bg-Yellow1' 
                        },
                        {
                            title: '100%',
                            text: `Digital signatures have been fully implemented – with around 60% of all suppliers now signing contracts digitally, speeding up the contracting phase..`,
                            borderColor: 'border-left-color-bg-primary' 
                        },
                    ],
                },
            ],
            bgColor: 'color-bg-Lit-4',
            textColor: 'text-bg-Black'
        },
        logisticsIntro3: {
            sectionTitle: 'What Rayonsoft did',
            id: 'logistics-intro-3',
            bgStylePatten: 'image-content-bgPattern25',
            content: [
                {
                    title: 'Source-to-Pay',
                    text: 'Simplified and standardized processes in key sourcing functions across the business, delivering operational excellence.',
                    borderColor: 'border-color-bg-Yellow1' 
                },
                {
                    title: 'E-tendering',
                    text: `Implemented e-sourcing and e-tendering, vendor master management, catalog management, which delivered more than $1B in savings.`,
                    borderColor: 'border-color-bg-Logo-ColorB1'
                },
                {
                    title: 'Automated bots',
                    text: `Developed a series of process automations, including 22 robotic process automation (RPA) bots and 15 mini-bots which led to increased efficiency.`,
                    borderColor: 'border-color-bg-Logo-ColorC1'
                }
            ], 
            bgColor: 'color-bg-Blue-2',
            textColor: 'text-bg-White',
          
        },
        logisticsIntro4: {
            sectionTitle: 'Capabilities',
            id: 'logistics-intro-4',
            subtitle: 'We bring together applied intelligence and advanced digital expertise in a way that puts people first. Combined with our global innovation capabilities and key partnerships, we help make supply chains work better, faster, and with more resilience.',
            bgStylePatten: 'image-content-bgPattern21',
            content: [
                {
                    title: 'Customer-centric supply chain transformation',
                    text: `Develop a segmentation strategy and platform-oriented operating model complemented with a "living" tech architecture and ecosystem partnerships.`,
                    icon: 'shopping_basket',
                    borderColor: 'border-color-bg-Yellow1'
                },
                {
                    title: 'Sourcing and procurement',
                    text: `Reimagine procurement end-to-end—to enhance customer experience, improve profitability and create a more responsible and resilient organization`,
                    icon: 'settings_applications',
                    borderColor: 'border-color-bg-Light-green'
                },
                {
                    title: 'Zero-based supply chain',
                    text: `Use zero-based supply chain to target value, manage design costs more effectively, and transform supply chain analytics.`,
                    icon: 'touch_app',
                    borderColor: 'border-color-bg-Orange'
                },
                {
                    title: 'Operational agility transformation',
                    text: `Use prime value chain analytics to increase transparency, bridge silos, turn complexity to your advantage and reshape operations around customer value.`,
                    icon: 'verified_user',
                    borderColor: 'border-color-bg-Lit-Tale-2'
                },
                {
                    title: 'Resilient supply chain',
                    text: `Adapt to the post-COVID reality by stress testing supply chain resilience, improving responsiveness, and outmaneuvering uncertainty more effectively`,
                    icon: 'swap_horizontal_circle',
                    borderColor: 'border-color-bg-Light-blue'
                },
                {
                    title: 'Sustainable and responsible supply chain',
                    text: `Increase trust with customers and suppliers through transparency and responsibility, target net zero emissions, and embrace the circular supply chain.`,
                    icon: 'visibility',
                    borderColor: 'border-color-bg-Indigo'
                }
            ],
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        }
        },
        oilGas: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Oil & Gas',
                pageParentId: 3,
                pageId: 331,
                subTitle: 'The future of oil and gas - safer, smarter and cleaner. We implemented two innovative products to keep its people safe while working faster and more reliably.',
                image: 'assets/images/marketplace/industries/oil-4.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Yellow-3',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Forefront of change',
                        scrollTo: 'oilGas-intro-1'
                    },
                    {
                        position: 1,
                        title: `Digital transformation`,
                        scrollTo: 'oilGas-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Strategy and solution',
                        scrollTo: 'oilGas-intro-3'
                    }
                ],
        },
        oilGasIntro1: {
                sectionTitle: 'Pivot to the patient',
                subTitle: '',
                id: 'oilGas-intro-1',
                bgStylePatten: 'image-content-bgPattern3',
                content: [
                    {
                        position: 0,
                        text: `Oil Industries Challenging its existing ways of working and finding new and better ways to solve problems.`
                    },
                    {
                        position: 1,
                        text: `We help, Oil Industries unlocking value by understanding issues and working in an agile way to develop sustainable solutions that can be used immediately to make work safer and more efficient..`
                    },
                    {
                        position: 2,
                        text: `The two product streams – Mobile-Enabled Field Worker and Wearables for Inspections – will provide significant improvements in process efficiency, productivity savings, automated transactional activities and more.`
                    }
                ],
                imageUrl: 'assets/images/marketplace/industries/oil-2.jpg',
                imagePostion: 'right',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Yellow-3',
            },
            oilGasIntro2: { 
                sectionTitle: `Digital transformation`,
                subTitle: `Developing a detailed digital road map to a major oil and gas company to transform their operations Oil and gas companies have the opportunity to lead the transition. We outline what we consider to be the only three viable options for oil and gas companies moving forward. Companies can choose only one path to follow.`,
                id: 'oilGas-intro-2',
                bgStylePatten: 'image-content-bgPattern23',
                content: [
                    {
                        title: 'Challenge',
                        text: `The company wanted to address these challenges with a technology-driven Industry X.O approach. 
                        Eager to expand its knowledge and experience in key digital areas (including data science, blockchain, 3D printing and robotics),
                         the client sought Rayonsoft’s help in understanding how it could take advantage of these emerging technologies.`
                    },
                    {
                        title: 'Transformation',
                        text: `A national oil company to an international oil company, with a deeper focus on operational efficiency and effectiveness. `
                    },
                    {
                        title: 'Refining operations',
                        text: `How digital technology is rapidly driving powerful results for refineries.`
                    },
                    {
                        title: 'Energy services',
                        text: ` From upstream to trading and refining to marketing, we help companies across the value chain.`
                    },
                    {
                        title: ' Industry X.0 services',
                        text: `To unlock lasting value, companies must select the right combinations of advanced technologies.`
                    }
                ],
                imageUrl: 'assets/images/marketplace/industries/finance-8a.PNG',
                imagePostion: 'right',
                bgColor: 'color-bg-Lit',
                textColor:'text-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff', 
                bannerBG: {
                    borderColor: 'border-color-bg-Yellow-3',
                    textColor: 'text-bg-Black',
                    bgColor: 'color-bg-Yellow-3',
                    bgPatten: 'image-content-bgPattern3',
                }
            },
            oilGasIntro3: {
                sectionTitle: 'Strategy and solution',
                id: 'oilGas-intro-3',
                bgStylePatten: 'image-content-bgPattern25',
                content: [
                    {
                        title: 'Discover with insight',
                        text: 'Assess the company’s current-state technologies and processes and the definition of a desired target state.',
                        borderColor: 'border-color-bg-Yellow1' 
                    },
                    {
                        title: 'A road map to success',
                        text: `Develop a five-year road map to bridge the gaps between the company’s primary pain points and potential digital technology solutions.`,
                        borderColor: 'border-color-bg-Logo-ColorB1'
                    },
                    {
                        title: 'A digital playbook',
                        text: `Identify how various technologies—including analytics, AI, cloud, VR, 3D printing and blockchain—could be applied across the company.`,
                        borderColor: 'border-color-bg-Logo-ColorC1'
                    }
                ], 
                bgColor: 'color-bg-Yellow-3',
                textColor: 'text-bg-Black',
            }
        },
        manufacturing: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Manufacturing',
                pageParentId: 3,
                pageId: 332,
                subTitle: 'Making the transition to digital manufacturing',
                image: 'assets/images/marketplace/industries/oil-3.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Yellow-2',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Innovation',
                        scrollTo: 'manufacturing-intro-1'
                    },
                    {
                        position: 1,
                        title: `Intelligent platforms`,
                        scrollTo: 'manufacturing-intro-2'
                    },
                    {
                        position: 2,
                        title: 'End-to-end application services',
                        scrollTo: 'manufacturing-intro-3'
                    }
                ],
        },
        manufacturingIntro1: { 
            sectionTitle: `Digital programs`,
            subTitle: `Analytics. Automation. Artificial intelligence. Smart factories. Integrated systems. With new digital skills and technologies, manufacturers can make business decisions based on real-time contextual data. It’s the biggest opportunity of the age, and we can help you make the transition.`,
            id: 'manufacturing-intro-1',
            bgStylePatten: 'image-content-bgPattern22',
            content: [
                {
                    title: 'Field Service Management',
                    text: `We offers comprehensive solutions to manage the field services operations of manufacturers,
                     ensuring first time right-service provisioning and effective service staff management. We help our clients transition from traditional
                      equipment selling to a service delivery-based business model enabled by digital technologies.
                     We also have a plug and play offering that provides manufacturers with field services capabilities using Cognizant intellectual property.`
                },
                {
                    title: 'The Modern Enterprise',
                    text: `Industry 4.0 is ushering in a new era of greater agility, visibility and control across information (OT/IT) systems connecting the physical world of machines, environments and products. Real-time information from previously siloed systems and data help run operations more efficiently, predict failures and provide a safer work environment. Learn how we’re working with clients across products, plants and geographies to drive better business outcomes. `
                },
                {
                    title: 'Energy services',
                    text: ` From upstream to trading and refining to marketing, we help companies across the value chain.`
                },
                {
                    title: ' Industry X.0 services',
                    text: `To unlock lasting value, companies must select the right combinations of advanced technologies.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/finance-8a.PNG',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Yellow-2',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Yellow-2',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        manufacturingIntro2: {
            id: 'manufacturing-intro-2',
            bgStylePatten: 'image-content-bgPattern25',
            content: [
                {
                    sectionTitle: `Here's how we'll help`,
                    subtitle:  `Industry X offers a specific solution around data digitization and integration, data management, and data-enabled R&D and product development operating model change. We make your engineering more intelligent by delivering:`,
                    content: [
                        {
                            title: '5-70%',
                            text: 'In savings delivered through reduction in prototyping and testing time.',
                            borderColor: 'border-left-color-bg-Yellow1' 
                        },
                        {
                            title: '20-40%',
                            text: `reduction in overall time-to-market.`,
                            borderColor: 'border-left-color-bg-primary' 
                        },
                    ],
                },
            ],
            bgColor: 'color-bg-Lit-4',
            textColor: 'text-bg-Black'
        },
        manufacturingIntro3: { 
            sectionTitle: `Capabilities`,
            subTitle: `With our global team of experts in design, engineering, technology, consulting, and operations, we work together at speed to find solutions to our clients’ challenges with a focus on Intelligent Product and Platform. We create products that customers love and get them to market quickly and cost efficiently. Our Digital Manufacturing and Operations platform helps to transform our clients’ organizations right through to the factory floor to create 360° value.            `,
            id: 'manufacturing-intro-3',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    title: 'Engineering and R&D digitization',
                    text: `Digitizing the Research & Development process to help clients lower their development costs and get new.`
                },
                {
                    title: 'Smart connected product design',
                    text: `Creating smart-connected products that provide vital digital intelligence and drive organizational change. `
                },
                {
                    title: 'Product platform engineering',
                    text: `  Bringing new ideas, products and services to market with increased efficiencies and speed.`
                },
                {
                    title: ' Production & operations',
                    text: `Creating truly connected factories and plants across multiple sites for enhanced management`
                },
                {
                    title: 'Autonomous robotic systems',
                    text: ` Redesigning manufacturing for more productive and efficient human + machine collaboration.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/finance-8a.PNG',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Yellow-2',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Yellow-2',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        },
        retail: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Retail',
                pageParentId: 3,
                pageId: 333,
                subTitle: 'How do we move retail from today’s uncertainty to tomorrow’s resiliency? Adaptive Retail—for new climates, new expectations and new ways of working.',
                image: 'assets/images/marketplace/industries/shopping-3.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Yellow-1',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Our vision',
                        scrollTo: 'retail-intro-1'
                    },
                    {
                        position: 1,
                        title: `Merchandising of the future`,
                        scrollTo: 'retail-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Retail Applied Intelligence',
                        scrollTo: 'retail-intro-3'
                    }
                ],
        },
        retailIntro1: {
            sectionTitle: 'Our vision',
            id: 'retail-intro-1',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    position: 0,
                    text: `Adaptive retail is the new imperative for retailers. With global disruption, external pressures and responsibilities, retailers need to be able to adapt—fast. Adapting means evolving, and evolution is how to stay resilient.`
                },
                {
                    position: 1,
                    text: `Futureproof your supply chain to strategically meet shifting consumer preferences, including last mile and sustainable delivery.`
                },
                {
                    position: 2,
                    text: `Futureproof your technology and develop ecosystem partnerships to enable consumer experiences with speed and agility.`
                },
                {
                    position: 3,
                    text: `Retailers need to adapt across three elements:`
                }
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Adapt to new climates',
                    text: `including social, economic, and environmental.`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'Adapt to new expectations',
                    text: `from employees, consumers, and investors.`
                },
                {
                    icon: 'track_changes',
                    color: 'text-bg-Red',
                    title: 'Adapt to new ways of working',
                    text: `with technology, competitors, and partners.`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/industries/shopping-6.PNG',
                title: 'Responsible Retail',
                subTitle: 'Reimagine the retail workforce',
                text: `Meeting the evolving expectations of customers and employees in an unprecedented economic and social climate is now the new normal for retail—and it demands a significantly more adaptive workforce: one that is digital, data fluent and diverse.`
            },
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        retailIntro2: {
            sectionTitle: `Reimagining the role of the retail merchant`,
            subTitle: `The role of retail merchant is reinvented by using automation to reduce mundane, data driven tasks and provide predictive insights.`,
            id: 'manufacturing-intro-3',
            bgStylePatten: 'image-content-bgPattern20',
            content: [
                {
                    title: 'Future Operating Model, Talent and Teaming',
                    text: `Traditional retail capabilities, teams, and mindsets and skills are redesigned to create the necessary speed and agility to serve today’s customers.`
                },
                {
                    title: 'Redefine the Portfolio Strategy Using Insights',
                    text: `Unite offerings, customer experiences and engagement by redeveloping the portfolio strategy using analytical insights in a profitable manner.`
                },
                {
                    title: 'Agile Product Development',
                    text: `Enrich the ability to design, create, and commercialize the most relevant product for the consumer in a nimble, responsive and seasonless manner.`
                },
                {
                    title: 'Localized Assortment and Inventory Placement',
                    text: `Maximize precision planning and assortment and inventory allocation with customer preferences and respond quicker to trends.`
                },
                {
                    title: 'Price and Promotion Optimization',
                    text: `Maximize impact of pricing and promo decisions through enhanced forecasting and machine learning simulations.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/shopping-8.jpg',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Yellow1',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Yellow1',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        retailIntro3: {
            sectionTitle: 'Reimagining merchandising',
            subtitle: 'Being successful today requires time, supporting capabilities and collaborating with ecosystem partners who can help retailers compete in an integrated marketplace.',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    title: 'Execution',
                    text: `Apply automation to highly predictable occurrences. For processes that require minimal human judgement, automation can help reduce errors, save on costs and free up time.`,
                    imageUrl: 'assets/images/marketplace/home/icon-4.png',
                },
                {
                    title: 'Intelligence',
                    text: ` Embrace advanced analytics to enable precision at scale. Now actionable data insights will direct merchant’s curation and segmentation of merchandise selections.`,
                    imageUrl: 'assets/images/marketplace/home/icon-2.png',
                },
                {
                    title: 'Strategic',
                    text: `Put execution and intelligence capabilities in place. By using these capabilities, merchants can invest brainpower in inspiring actions that deliver differentiated value propositions.`,
                    imageUrl: 'assets/images/marketplace/home/icon-3.png',
                },
                {
                    title: 'Shape of chain',
                    text: `Leverage advanced analytics to optimize existing and future supply chain real estate, including stores and distribution centers.`,
                    imageUrl: 'assets/images/marketplace/home/icon-1.png',
                },
            ],
            bgColor: 'color-bg-Yellow1',
            textColor: 'text-bg-Black',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#FFFFFF',
        }
        },
        travel: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Travel',
                pageParentId: 3,
                pageId: 334,
                subTitle: 'At a time where the future of the industry is in flux, how can travel companies outmaneuver uncertainty in a new era of Travel?',
                image: 'assets/images/marketplace/industries/travel-1.PNG',
                textColor: 'text-bg-White',
                bgColor: 'color-bg-Blue-7',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Guest experiences',
                        scrollTo: 'travel-intro-1'
                    },
                    {
                        position: 1,
                        title: `Business growth`,
                        scrollTo: 'travel-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Capabilities',
                        scrollTo: 'travel-intro-3'
                    }
                ],
        },
        travelIntro1: {
            sectionTitle: `Capabilities`,
            subTitle: `We help travel companies outmaneuver uncertainty by innovating around industry-specific functions and capabilities to provide clients with speed-to-value.`,
            id: 'travel-intro-3',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    title: 'Back to growth in travel',
                    text: `Restore air travel confidence and ensure traveler and citizen safety through a solution to enable secure sharing of health credentials.`
                },
                {
                    title: 'Reinventing travel with technology',
                    text: `Become more agile, innovative & resilient by embarking on your journey through the cloud.`
                },
                {
                    title: 'Airline Retail Transformation',
                    text: ` Realize the art of the possible in your transformation from airline to travel brand.`
                },
                {
                    title: 'Autonomous robotic systems',
                    text: `Redesigning travel checkin for more productive and efficient human + machine collaboration.`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/travel-2.jpg',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Blue-7',
                textColor: 'text-bg-White',
                bgColor: 'color-bg-Blue-7',
                bgPatten: 'image-content-bgPattern3',
            }
        },
        travelIntro2: {
            id: 'travel-intro-2',
            sectionTitle: 'A platform for business growth',
            subtitle: 'Living Systems is the foundation for sustainable innovation in the new era of travel. It is pivotal to help your organization outmaneuver uncertainty and incrementally evolve capabilities and skills in a world of constant change.',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    title: 'Traveler Experience',
                    text: `Rebuild trust with your customers and jumpstart demand for travel by ensuring safe, seamless and innovative traveler experiences.`,
                    imageUrl: 'assets/images/marketplace/home/icon-4.png',
                },
                {
                    title: 'Intelligent Operations',
                    text: `Better equip your people for the future of travel with more flexible and efficient back-office operations.`,
                    imageUrl: 'assets/images/marketplace/home/icon-2.png',
                },
                {
                    title: 'Living Systems',
                    text: `Create value by moving five levers of change, including strategy, organization, practices, technology and talent, in an agile way.`,
                    imageUrl: 'assets/images/marketplace/home/icon-3.png',
                },
                {
                    title: 'Shape of chain',
                    text: `Leverage advanced analytics to optimize existing and future supply chain real estate, including stores and distribution centers.`,
                    imageUrl: 'assets/images/marketplace/home/icon-1.png',
                },
            ],
            bgColor: 'color-bg-Blue-7',
            textColor: 'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#FFFFFF',
        },
        travelIntro3: {
            sectionTitle: 'Guest experiences on the high seas',
            id: 'travel-intro-1',
            bgStylePatten: 'image-content-bgPattern3',
            content: [
                {
                    position: 0,
                    text: `As the industry grows, so does competition, and cruise lines need to deliver personalized, cost-effective experiences to keep passengers coming back to sea on their ships.`
                },
                {
                    position: 1,
                    text: `As the premier innovation partner for Carnival Corporation’s Global Experience & Innovation team, Rayonsoft is helping to elevate and transform the cruise experience by scaling made-for-me experiences for thousands of passengers at a time.`
                },
                {
                    position: 2,
                    text: `Discover how an innovation partner tapped into all five of its businesses – Digital, Technology, Strategy, Consulting and Operations - to provide Carnival guests with the best experience on the seven seas.`
                }
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Connecting every guest to personalized experiences',
                    text: `Each guest receives a free Medallion. The light, quarter-sized disc enables frictionless payment, keyless stateroom access, accelerated embarkation and much more.`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'Enabling guest-to-guest wayfinding',
                    text: `The Medallion allows guests to seamlessly find their next location and easily locate friends and family onboard. Crew also know where passengers are to serve them as they move about the ship.`
                },
                {
                    icon: 'track_changes',
                    color: 'text-bg-Red',
                    title: 'Learning as we go',
                    text: `Data captured on board—including movement patterns, guest behaviors and more—allows Carnival to create new services and experiences. It also allows them to manage operations and design future ships.`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/industries/tarvel-3.jpg',
                title: 'Travel',
                subTitle: 'Cloud imperative for travel',
                text: `Cloud is travel's passport to tomorrow: Increase resilience, innovation, and create seamless traveler experiences.`
            },
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        }
        },
        utitlies: {
            pageBanner: {
                mainTitle: 'INDUSTRIES',
                title: 'Utilities',
                pageParentId: 3,
                pageId: 335,
                subTitle: `The future of utilities is digital. Discover how we're helping electricity, gas and water companies enable transformation for value and new growth.`,
                image: 'assets/images/marketplace/industries/untility-1.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Industry',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Accelerating',
                        scrollTo: 'utitlies-intro-1'
                    },
                    {
                        position: 1,
                        title: `We serve`,
                        scrollTo: 'utitlies-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Capabilities',
                        scrollTo: 'utitlies-intro-3'
                    }
                ],
            },
            utitliesIntro1: {
                sectionTitle: 'Accelerating the energy transition',
                subtitle: 'We help the energy transition services for utilities toward a net-zero emission future.',
                id:  'utitlies-intro-1',
                bgStylePatten: 'image-content-bgPattern25',
                content: [
                    {
                        title: 'Net-zero emission future',
                        text: [
                            {
                                list: `Energy providers are already implementing new business models, partnerships, and capabilities
                                 to decarbonize the energy system and meet increasingly ambitious targets and commitments.`
                            },
                            { 
                                list: `We help our clients to make zero-emissions energy industrialized, competitive, and ubiquitous.
                                 Our services span the energy value chain from generation, transmission and distribution, to energy trading and retail, from strategy to execution and operations.`
                            }
                        ],
                        imageUrl: 'assets/images/marketplace/services/Strategy-5.jpg',
                    },
                    {
                        title: 'The role of storage',
                        text: [
                            {
                                list: `The transition to a low-carbon sustainable future is underway.
                                  The shape the transition will take has yet to be determined. `
                            },
                            {
                                list: `We used RAEL’s utility-sector operation and capacity expansion modeling capability (SWITCH),
                                 alongside our own research and energy storage experience.`
                            }
                        ],
                        imageUrl: 'assets/images/marketplace/services/services-28.jpg',
                    },
                    {
                        title: 'Embrace new connected energy business models',
                        text: [
                            {
                                list: `The unfolding energy transition is characterized by rapidly growing renewables
                                 ambitious climate targets and cross-industry convergence.`
                            },
                            {
                                list: `The focus for eMobility is on business models related to EV charging infrastructure and services.
                                 DER business models focus on rooftop solar, battery storage and smart heating applications such as smart heat pumps 
                                 and smart water heaters.`
                            }
                        ],
                        imageUrl: 'assets/images/marketplace/services/services-17.jpg',
                    }
                ],
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black',
            
            },
            utitliesIntro2: {
                sectionTitle: `Industry segments we serve`,
                subTitle: `Across utilities, we’re helping transform companies to continuously adapt and improve outcomes through innovation.`,
                id: 'utitlies-intro-2',
                bgStylePatten: 'image-content-bgPattern23',
                content: [
                    {
                        title: 'Transmission and distribution',
                        text: `Transform power networks for improved asset performance reduced costs and realized value.`
                    },
                    {
                        title: 'Energy retail and customer experience',
                        text: `Create new customer experiences, revenue streams and ecosystems for the retail business.`
                    },
                    {
                        title: 'Power generation',
                        text: `Uncover a future of innovation for conventional power generation.`
                    },
                    {
                        title: 'Renewable power',
                        text: `Innovative business solutions for renewables companies to generate new value and greater performance.`
                    }
                ],
                imageUrl: 'assets/images/marketplace/industries/unitlity-2.jpg',
                imagePostion: 'left',
                bgColor: 'color-bg-Lit',
                textColor:'text-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#00e1ff', 
                bannerBG: {
                    borderColor: 'border-color-bg-Blue-7',
                    textColor: 'text-bg-White',
                    bgColor: 'color-bg-Blue-7',
                    bgPatten: 'image-content-bgPattern3',
                }
            },
            utitliesIntro3: {
                sectionTitle: 'Our capabilities',
                id: 'utitlies-intro-3',
                bgStylePatten: 'image-content-bgPattern21',
                content: [
                    {
                        title: 'Strategy & Consulting',
                        subTitle: 'Intelligent Platform Services',
                        text: ` Rapidly and confidently reinvent your business to increase resilience, mitigate risk and return to sustainable growth.`,
                        imageUrl: 'assets/images/marketplace/services/service-28.jpg',
                    },
                    {
                        title: 'Artifical Intelligence',
                        subTitle: 'Intelligent software engineering services',
                        text: `Build systems to drive your business strategy using data, AI, cloud and new technologies.`,
                        imageUrl: 'assets/images/marketplace/services/ai-1.jpg',
                    },
                    {
                        title: 'Utility Cloud',
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
            }
        }
}
}