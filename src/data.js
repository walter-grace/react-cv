
export const CVData = {
    personalData: {
      name: 'Nico Canale',
      title: 'Front End Artist-Developer',
      image: 'https://media.giphy.com/media/2n8480RCQ2jBe/giphy.gif',
      contacts: [
        { type: 'email', value: 'nicocanale@protonmail.com' },
        { type: 'phone', value: '213-234-8399' },
        { type: 'location', value: 'Los Angeles' },
        { type: 'website', value: 'https://n1c0.netlify.app/index' },
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Outlook',
        content: 'I have worked in many different fields. I have always loved every aspect of learning on the job. Traveling around the USA has been something that has taught me about diversity as well as how wonderful the little things in life truly are. I spend my free time trying to learn new programming topics and self educating myself as much as possible. Flexibility, I would say has become almost a middle-name for me, as I try to have the best tools for whatever the jobs needs. A positive outlook is important to sustaining a good environment. I hope to find mission statements that I can lose myself in my work and build projects that exceed expectations. ',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'Economics (BS)',
            authority: 'John Carroll University',
            rightSide: '2014.12 - 2016.06'
          },
          {
            authority: 'Florida Gulf Coast University',
            description: 'Hospitality',
            rightSide: '2014.01 - 2014.11'
          },
          {
            authority: 'Saint Francis University',
            description: 'International Business',
            rightSide: '2012.01 - 2013.12'
          }
        ]
        },
      {
        type: 'experiences-list',
        title: 'Experiences',
        description: 'Work Experiences',
        icon: 'archive',
        items: [
            {
                title: 'Manager + Shopify Dev',
                company: 'Lifehouse Tonics ',
                description: ' A shopify style based business with a storefront on Sunset Blvd. Tasks included developing new clients and develop new recipes depending on demand. The store is a wellness based store which provides keto-genic products for high end clients. I  also helped with some of the shopify build out ',
                companyWebSite: 'http://somecompanyexample.com',
                companyMeta: '',
                datesBetween: '2019.01 - Present',
                descriptionTags: ['Custom Service','On-line Sales','Shopify']
              },
          {
            title: 'Lead Developer + Business Dev',
            company: 'Paragon Coin ',
            description: ' I was head of business development with a focus on acquisition of real estate and merging new partnerships. Another task included helping develop on ERC-20 token contracts',
            companyWebSite: 'http://somecompanyexample.com',
            companyMeta: '',
            datesBetween: '2017.11 - 2018.01',
            descriptionTags: ['Blockchain','Ethereum', 'React']
          },
          {
            title: 'CTO/Co-founder',
            company: 'Zxeno',
            description: 'I created a start-up that will develop chatbots for marketing agencies and would leverage existing platforms to build more client engagement. My model was to create custom solutions to be integrated into their existing social medias ',
            datesBetween: '2016.8 - 2017.10',
            descriptionTags: ['Chatfuel','Javascript', 'React']
          },
          {
            title: 'Sales Consultant',
            company: 'Travelex',
            description: 'I helped provide great customer service, built lasting relationships, and got to know the customer along with all hassles with getting foreign currency while traveling. Handled cash transactions over $10k and processed customers through proper KYC/AML.',
            descriptionTags: ['Foreign Currency'],
            datesBetween: '2015.06 - 2016.10'
          },
          {
            title: 'IT Assistant',
            company: 'John Carroll University',
            description: 'Configured hardware and software, setting up peripherals such as printers or routers, repairing equipment, and providing daily support for computer network users. Performed help desk duties, including answering calls and e-mails regarding computer network and communication systems.',
            datesBetween: '2015.06 - 2016.10'
          }
        ]
      },
      {
        type: 'projects-list',
        title: 'Projects',
        icon: 'tasks',
        groups: [
          {
            sectionHeader: 'Programming Projects',
            items: [
              { title: 'Covid-19 Tracker', projectUrl: 'https://5e912fdd1694d9542da56b92--covid-19-data-tracker.netlify.app/', description: 'Daily Tracking of Covid-19 US and Global numbers.' },
              { title: 'GPT-2 Python code', projectUrl: 'https://github.com/walter-grace/basicganbot', description: 'GPT-2 Python code plus Twitter bot' },
              { title: 'One-Click and Buy Crypto', projectUrl: 'https://00crypto00.netlify.app/', description: 'Simple App allowing one to connect a Web3.0 Wallet and get ERC-20 tokens' },
              { title: 'Draggable List', projectUrl: 'https://nighttab.netlify.app/', description: 'A draggable list with a night-mode tab' }
            ]
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Professional'
          },
          {
            authority: 'Spanish',
            authorityMeta: 'Beginner'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['React', 'Javascript', 'CSS', 'Python', 'Economics']
      }
    ]
  }
  