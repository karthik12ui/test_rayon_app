import { appUrlRoutings } from '../app.constant';

export class HomeDb {
    public static Home = {
        carouselSection : [
            {
                id: 'services',
                title: 'Services',
                subTitle: `Rayonsoft is helping clients transform their business, operating and technology models in the digital era by
                connecting the smartest people and brightest businesses to the opportunities they need to thrive.`,
                loadMore: appUrlRoutings.services,
                image:'./assets/images/marketplace/home-services.jpg',
                bgColorCode: 'color-bg-Blue',
                mainTitle: 'text-bg-Light-blue'
            },
            {
                id: 'industries',
                title: 'Industries',
                subTitle: `Your business operates in a world that will change as much in the next 10 years as it has in the past 100.
                It’s not enough to simply cope with change and go with the flow; you need to adapt and prepare for the next digital revolution today.`,
                loadMore: appUrlRoutings.industries,
                image:'./assets/images/marketplace/industries/oil-4.PNG',
                bgColorCode: 'color-bg-Deep-orange',
                mainTitle: 'text-bg-Deep-orange'
            },
            {
                id: 'solutions',
                title: 'Solutions',
                subTitle: `We develop business solutions that can help in their business growth and improved customer
                satisfaction.`,
                loadMore: appUrlRoutings.solutions,
                image:'./assets/images/marketplace/services/service-28.jpg',
                bgColorCode: 'color-bg-DeepPurple',
                mainTitle: 'text-bg-Logo-ColorB3'
            },
        ],
        ourVision: {
            sectionTitle: 'Our Vision',
            subTitle: 'Future, Amplified',
            bgStylePatten: 'image-content-bgPattern20',
            content: [
                {
                    position: 0,
                    text: `We’re in the business of building tomorrow. It’s not about reading the signs and making sure you’re ready,
                     it’s about deciding where and how you want to get to the next level. And then, connecting with the right people—and partners—to get you there.`
                },
                {
                    position: 1,
                    text: `We offers end-to-end services and a complete line of Smart Industry offerings by delivering cross-industry expertise in technology and digital engineering consulting, talent services, and skilling.
                     We support our clients by providing talent and technology at every stage of the Smart Industry implementation.`
                },
            ],
            imageUrl: 'assets/images/marketplace/services/cloud-2.png',
            imagePostion: 'right',
            bgColor: 'color-bg-lit',
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
        bgColor: 'color-bg-lit',
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
    howWeHelp: {
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
    coreValues: {
        sectionTitle: 'Our core values',
        bgStylePatten: 'image-content-bgPattern23',
        content: [
            {
                position: 0,
                text: `At Rayonsoft, our people care deeply about doing the right thing. Together, we have proven that we can succeed—providing value to our clients and shareholders and opportunities for our people—while being a powerful force for good. Our shared commitment to operating with the highest ethical standards and making a positive difference in everything we do is what makes Rayonsoft special.`
            },
            {
                position: 1,
                text: `With our Code of Business Ethics, we want to help our people make ethical behavior a natural part of what we do every day—with each other, our clients, our business partners, and our communities.`
            },
            {
                position: 3,
                text: `Our Code is more than just a document…it’s what we believe, how we live and how we lead. It’s embedded in all we do. It’s how we improve our business performance and build on Rayonsoft’s reputation in the marketplace. It’s how we put our clients and our people first. It’s our way of putting integrity into action…every one of us, in every moment, every day.`
            },
        ],
        content2: [
            {
                icon: 'lock',
                color: 'text-bg-primary',
                title: 'Data privacy',
                text: `Safeguarding data is one of our most important responsibilities. We are continually evolving our approach to information security and data protection.`
            },
            {
                icon: 'list_alt',
                color: 'text-bg-Orange',
                title: 'Comply with laws',
                text: `We comply with all laws, whether local, national or regional. Rayonsoft people, and those acting on our behalf, are responsible for understanding the applicable rules and must work with Legal to ensure compliance.`
            },
            {
                icon: 'group_work',
                color: 'text-bg-Red',
                title: 'Protect people, information and our business', 
                text: `We work together to build a better, stronger company for future generations, protecting the Rayonsoft brand, information, intellectual property and our people.`
            }
        ],
        imageContent: {
            imageUrl: 'assets/images/marketplace/home/policy-3.PNG',
            title: 'Best practices and policies',
            subTitle: 'Corporate Governance Guidelines',
            text: `We’re making a positive difference and delivering 360-degree value for our clients, communities, shareholders, partners and people. Making your conduct count is about fostering respect, fairness and shared ethical values and describes behaviors that we expect from - and for - our people so that they can be at their best each day.`
        },
        imagePostion: 'right',
        bgColor: 'color-bg-lit',
        textColor: 'text-bg-Black'
    },
    testimonials: {
        sectionTitle: 'Our Partners about us',
        bgStylePatten: 'image-content-bgPattern16',
        content: [
            { 
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.', 
                author: 'Mr. Test', 
                position: 'General Director', 
                image: 'assets/images/others/user.jpg' 
            },
            { 
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.', 
                author: 'Test', 
                position: 'General Director', 
                image: 'assets/images/others/user.jpg' 
            },
            { 
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.', 
                author: 'Test', 
                position: 'General Director', 
                image: 'assets/images/others/user.jpg' 
            },
            { 
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dolor magnam, facilis voluptas quia excepturi provident cupiditate.', 
                author: 'Mrs. Test', 
                position: 'Marketing Manager', 
                image: 'assets/images/others/user.jpg' 
            }
        ],
        bgColor: 'color-bg-lit',
        textColor: 'text-bg-Black',
        gridStrokeColor: '#AAAAAA',
        lineStrokeColor: '#039be5',
    }
    }
}