export class SolutionsDb {
    public static Solutions = {
        ebuisness: {
            pageBanner: {
                mainTitle: 'SOLUTIONS',
                title: 'e-Business Solution',
                pageParentId: 4,
                pageId: 411,
                subTitle: 'We support your business processes by automating and integrating using information and communication technology (ICT)',
                image: 'assets/images/marketplace/solutions/ebusiness-1.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Lit-Tale-4',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            }, 
            pageNavItems: {
                selectPlaceholder: 'View by Solution',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'e-Business',
                        scrollTo: 'ebuisness-intro-1'
                    },
                    {
                        position: 1,
                        title: `Capabilities`,
                        scrollTo: 'ebuisness-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Value',
                        scrollTo: 'ebuisness-intro-3'
                    },
                    {
                        position: 2,
                        title: 'What Rayonsoft did',
                        scrollTo: 'ebuisness-intro-4'
                    }
                ],
        },
        ebuisnessIntro1: {
            sectionTitle: 'e-Business',
            subTitle: '',
            id: 'ebuisness-intro-1',
            bgStylePatten: 'image-content-bgPattern20',
            content: [
                {
                    position: 0,
                    text: `The Internet is completely changing and revolutionizing the way companies and people do
                    business today.`
                },
                {
                    position: 2,
                    text: `E-business is the integration of a company's activities, including products,
                    procedures, and services, with the Internet. Our expert e-business analysts help our clients to
                    transform their traditional business to a new e-business enabled company by integrating their business
                    activities like sales, marketing, accounting, manufacturing, and operations with the internet as a fully
                    integrated channel of information flow.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/talent-2.png',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
    },
    ebuisnessIntro2: {
        sectionTitle: `Capabilities`,
        subTitle: `Getting from the old to the new digital business services suite was a multi-year journey of four key phases. Every step involved the global IT organization working closely with business stakeholders to address challenges and develop solutions collaboratively.`,
        id: 'ebuisness-intro-2',
        bgStylePatten: 'image-content-bgPattern21',
        content: [
            {
                title: 'Business focus and foundation',
                text: `The vision was to enable digital business services: a suite of applications to manage, sell and deliver work for Rayonsoft’s clients in an integrated experience. Achieving this vision would transform processes for account planning, forecasting, sales, pricing, revenue management and reporting, and would lead to major business and operational impact.`
            },
            {
                title: 'Integration and automation',
                text: `Implementing integration and automation was done in parallel. Teams built integrations across applications and with Rayonsoft’s enterprise systems, eliminating redundant data processing, automating manual tasks and improving data quality.`
            },
            {
                title: 'Process transformation',
                text: `The foundational suite of applications, coupled with integration and automation, now allows Rayonsoft to transform business processes.`
            },
            {
                title: 'Insights and analytics',
                text: `Having more data available across many systems and a high-performance data architecture allows Rayonsoft to produce insights previously unattainable.`
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
    ebuisnessIntro3: {
        id: 'ebuisness-intro-3',
        bgStylePatten: 'image-content-bgPattern19',
        content: [
            {
                sectionTitle: `Here's how we'll help`,
                subtitle:  `Industry X offers a specific solution around data digitization and integration, data management, and data-enabled R&D and product development operating model change. We make your engineering more intelligent by delivering:`,
                content: [
                    {
                        title: '5-70%',
                        text: 'In savings delivered through reduction in prototyping and testing time by integrate additional business processes like legal, staffing, risk management and more in support',
                        borderColor: 'border-left-color-bg-Yellow1' 
                    },
                    {
                        title: '20-40%',
                        text: `reduction in overall time-to-market by working faster and more effectively, winning work more quickly and profitably.`,
                        borderColor: 'border-left-color-bg-primary' 
                    },
                ],
            },
        ],
        bgColor: 'color-bg-Lit-4',
        textColor: 'text-bg-Black'
    },
    ebuisnessIntro4: {
        sectionTitle: 'What Rayonsoft did',
        id: 'ebuisness-intro-4',
        bgStylePatten: 'image-content-bgPattern23',
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
        },
        entyerpriseAI: {
            pageBanner: {
                mainTitle: 'SOLUTIONS',
                title: 'Enterprise Application Integration',
                pageParentId: 4,
                pageId: 412,
                subTitle: 'Accelerate change across your enterprise to create lasting value',
                image: 'assets/images/marketplace/solutions/solutions-2.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Solution',
                display: true,
                list: [
                    {
                        position: 0,
                        title: 'Competition',
                        scrollTo: 'entyerpriseAI-intro-1'
                    },
                    {
                        position: 1,
                        title: `Innovate for resilience`,
                        scrollTo: 'entyerpriseAI-intro-2'
                    },
                    {
                        position: 2,
                        title: 'Steps towards empathetic banking',
                        scrollTo: 'entyerpriseAI-intro-3'
                    }
                ],
        },
        entyerpriseAIIntro1: {
            sectionTitle: 'Outpace the competition',
            id: 'entyerpriseAI-intro-1',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    position: 0,
                    text: `Tech is everywhere. Yet your business may not be getting the full value from your investments.`
                },
                {
                    position: 1,
                    text: `Our deep industry expertise puts us in a unique position to help you use the right technology to address your most complex and critical challenges—whether it’s through faster cloud migration, getting the most value out of the top technology platforms, making the most of your data through applied intelligence, or underpinning everything you do with security.`
                }
            ],
            content2: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Architecting a better future',
                    text: `Enterprises can custom-tailor every layer of it now, but building and wielding the most competitive stack means thinking differently.`
                },
                {
                    icon: 'widgets',
                    color: 'text-bg-Orange',
                    title: 'The power of massive, intelligent, digital twins',
                    text: `Growing investments in data, AI and digital twin technologies are giving rise to a new generation of business and intelligence.`
                },
                {
                    icon: 'track_changes',
                    color: 'text-bg-Red',
                    title: 'The democratization of technology',
                    text: `Technology is democratizing. Natural language processing, low-code platforms and robotic process automation are adding a grassroots layer to enterprise innovation strategies.`
                }
            ],
            imageContent: {
                imageUrl: 'assets/images/marketplace/solutions/ebusiness-2.PNG',
                title: 'Artificial Intelligence',
                subTitle: 'Technology Vision 2021',
                text: `We master the proven success factors that help businesses multiply value from their AI projects.`
            },
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        },
        entyerpriseAIIntro2: {
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
        entyerpriseAIIntro3: {
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
        entyerpriseAIIntro4: {
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
        entyerpriseSOA: {
            pageBanner: {
                mainTitle: 'SOLUTIONS',
                title: 'Enterprise SOA Solution',
                pageParentId: 4,
                pageId: 413,
                subTitle: `SOA is widely considered as the most effective way of
                overcoming IT complexities involved in businesses that require their IT systems to be
                flexible and adaptive enough to address ever-changing business needs`,
                image: 'assets/images/marketplace/solutions/solutions-1.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-Blue-9',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#028cf1',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Solution',
                display: true,
                list: [
                    {
                        position: 1,
                        title: `SOA`,
                        scrollTo: 'entyerpriseSOA-intro-2'
                    },
                    {
                        position: 0,
                        title: 'Capabilities',
                        scrollTo: 'entyerpriseSOA-intro-1'
                    },
                    {
                        position: 2,
                        title: 'Reflect reality',
                        scrollTo: 'entyerpriseSOA-intro-3'
                    },
                    {
                        position: 3,
                        title: 'Edge in SOA',
                        scrollTo: 'entyerpriseSOA-intro-4'
                    }
                ],
        },
        
        entyerpriseSOAIntro1: {
            sectionTitle: `Capabilities`,
            subTitle: `Getting from the old to the new digital business services suite was a multi-year journey of four key phases. Every step involved the global IT organization working closely with business stakeholders to address challenges and develop solutions collaboratively.`,
            id: 'entyerpriseSOA-intro-1',
            bgStylePatten: 'image-content-bgPattern23',
            content: [
                {
                    title: 'Reduction of operating and maintenance costs',
                    text: `The vision was to enable digital business services: a suite of applications to manage, sell and deliver work for Rayonsoft’s clients in an integrated experience. Achieving this vision would transform processes for account planning, forecasting, sales, pricing, revenue management and reporting, and would lead to major business and operational impact.`
                },
                {
                    title: 'Better and Improved end to end operational visibility',
                    text: `Implementing integration and automation was done in parallel. Teams built integrations across applications and with Rayonsoft’s enterprise systems, eliminating redundant data processing, automating manual tasks and improving data quality.`
                },
                {
                    title: 'Seamless interaction with business suppliers, partners and customers',
                    text: `The foundational suite of applications, coupled with integration and automation, now allows Rayonsoft to transform business processes.`
                },
                {
                    title: 'New application development with services in mind',
                    text: `Having more data available across many systems and a high-performance data architecture allows Rayonsoft to produce insights previously unattainable.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'left',
            bgColor: 'color-bg-Lit',
            textColor:'text-bg-White',
            gridStrokeColor: '#AAAAAA',
            lineStrokeColor: '#00e1ff', 
            bannerBG: {
                borderColor: 'border-color-bg-Blue-9',
                bgColor: 'color-bg-Blue-9',
                textColor: 'text-bg-Black',
                bgPatten: 'image-content-bgPattern3',
            }
        },
            entyerpriseSOAIntro2: {
                sectionTitle: 'Rayonsoft SOA',
                subTitle: '',
                id: 'entyerpriseSOA-intro-2',
                bgStylePatten: 'image-content-bgPattern20',
                content: [
                    {
                        position: 0,
                        text: `SOA has emerged as a crucial enabler in the field of on-demand IT and business
                        computing for enterprises. SOA is widely considered as the most effective way of
                        overcoming IT complexities involved in businesses that require their IT systems to be
                        flexible and adaptive enough to address ever-changing business needs`
                    },
                    {
                        position: 2,
                        text: `Rayonsoft considers SOA to be a growth engine for the future. Rayonsoft help customers
                         to leverage on what they own, not just keep on making new investments to solve their business issues. `
                    },
                ],
                imageUrl: 'assets/images/marketplace/services/talent-2.png',
                imagePostion: 'left',
                bgColor: 'color-bg-Lit',
                textColor: 'text-bg-Black'
        },
        entyerpriseSOAIntro3: {
            id: 'entyerpriseSOA-intro-3',
            bgStylePatten: 'image-content-bgPattern25',
            content: [
                {
                    sectionTitle: 'Reflect reality',
                    subtitle:  `Powering new possibilities through a digital-physical world`,
                    content: [
                        {
                            title: '77%',
                            text: `of executives state that their technology architecture is becoming very critical or critical to the overall success of their organization.`,
                            borderColor: 'border-left-color-bg-Yellow1' 
                        },
                        {
                            title: '87%',
                            text: `of executives agree digital twins are becoming essential to their organization’s ability to collaborate in strategic ecosystem partnerships`,
                            borderColor: 'border-left-color-bg-primary' 
                        }
                    ],
                },
            ],
            bgColor: 'color-bg-Blue-9',
            textColor: 'text-bg-Black'
        },
        entyerpriseSOAIntro4 : {
            sectionTitle: 'Turn emerging risk into exceptional reward',
            subtitle: `Rayonsoft has focused competency with strong and experience resources of SOA consultants, having extensive experience working with SOA specific expertise tools and frameworks. These consultants have Implemented Web Services using BEA WebLogic, WebSphere, SunOne, .NET, Oracle , Tomcat, TIBCO, WebMethods, SAP NetWeaver, Cordys, Vitria.`,
            id: 'entyerpriseSOA-intro-4',
            bgStylePatten: 'image-content-bgPattern28',
            content: [
                {
                    icon: 'verified_user',
                    color: 'text-bg-primary',
                    title: 'Web services enabling & application development',
                    text: `$120 billion in revenue from smart health products and services, particularly for aging populations, and direct life and wealth management products`
                },
                {
                    icon: 'group',
                    color: 'text-bg-Orange',
                    title: 'Web services B2B solutions',
                    text: `$115 billion in revenue from products and services to address new exposures, like climate change, sharing economy asset usage, and bigger cyber threats`
                },
                {
                    icon: 'search',
                    color: 'text-bg-Red',
                    title: 'Global data synchronization services',
                    text: `$120 billion in products and services enabling smart auto, smart home, and smart manufacturing`
                },
                {
                    icon: 'thumb_up', 
                    color: 'text-bg-Light-green',
                    title: 'Web services BPM',
                    text: `$125 billion from premium shifts to new distributors, like big tech, manufacturers and insurtechs, and direct sales of small commercial insurance`
                }
            ],
            imageUrl: 'assets/images/marketplace/industries/finance-8a.PNG',
            imagePostion: 'right',
            bgColor: 'color-bg-Lit',
            textColor: 'text-bg-Black'
        }
        },
        mobileAppDev: {
            pageBanner: {
                mainTitle: 'SOLUTIONS',
                title: 'Mobile APPs Development',
                pageParentId: 4,
                pageId: 414,
                subTitle: 'We support your business processes by automating and integrating using information and communication technology (ICT)',
                image: 'assets/images/marketplace/solutions/ebusiness-4.PNG',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Solution',
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
        },
        webDev: {
            pageBanner: {
                mainTitle: 'SOLUTIONS',
                title: 'Web Development',
                pageParentId: 4,
                pageId: 415,
                subTitle: 'We support your business processes by automating and integrating using information and communication technology (ICT)',
                image: 'assets/images/marketplace/solutions1.jpg',
                textColor: 'text-bg-Black',
                bgColor: 'color-bg-White',
                gridStrokeColor: '#AAAAAA',
                lineStrokeColor: '#FFAB00',
                enableQuickNav: true
            },
            pageNavItems: {
                selectPlaceholder: 'View by Solution',
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
        },
    }
}