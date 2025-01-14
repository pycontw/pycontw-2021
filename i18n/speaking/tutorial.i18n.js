import { genI18nMessages } from '~/utils/i18n.utils'

export default genI18nMessages({
    'en-us': {
        title: 'How to Propose a Tutorial?',
        intro: [
            'For information on the overall CfP process, see {cfp}.',
            'First of all, thank you for your interest in conducting a tutorial at PyCon Taiwan 2025.',
            'Generally speaking, good tutorials possess most of the traits that good talks have. ' +
                'The biggest differences between a tutorial and a talk are the hands-on nature of a tutorial, ' +
                'and the duration of the tutorial. As tutorials last longer than talks, well-prepared content is required ' +
                'but the content must stay interesting to keep the attendees engaged. ' +
                'Hence, you must have prior experience teaching coding to people. ' +
                'You might also want to consider bringing along teaching assistants for tutorials to assist you. ' +
                'We recommend at least two teaching assistants for a general class size of 20 people.',
            'Due to the differences mentioned above, speakers who are interested in conducting tutorials ' +
                'must satisfy at least one of the following prerequisites:',
        ],
        requirements: [
            'A previous tutorial speaker in any programming conferences or communities',
            'At least one time of speaking experience in open source events or communities, preferably local Python communities',
            'Prior experience as a teaching assistant in tutorials conducted by others',
        ],
        proviso:
            'We might ask you to give the tutorial at a local Python meetup before the conference if you lack the experience ' +
            'mentioned above.',

        policies: [
            [
                'Duration',
                [
                    'The length of the tutorial is 1 hour and 30 minutes.',
                    'In our previous experiences, tutorials that run for 6 hours were exhausting for both instructors and students, ' +
                        'and students usually find it difficult to follow along in the second half of the tutorial. ' +
                        'Full-day tutorials require an experienced instructor, and hence we have decided to limit the length of a tutorial ' +
                        'to 1 hour and 30 minutes this year. ' +
                        'We strongly recommend you to clearly define prerequisites and goals in your tutorial and tutorial proposal, ' +
                        'which will help ensure the best learning experience for the participants.',
                ],
            ],
            [
                'Dates/Location',
                [
                    'Tutorials are held in parallel with the main conference, and tutorials will be held at the same online venue ' +
                        'as the main conference, albeit in different rooms.',
                ],
            ],
            [
                'Charging Policy',
                ['All tutorials will be free for conference participants.'],
            ],
            [
                'How to Become an Instructor',
                [
                    'The easiest way is to get involved in your local Python communities by speaking at these events.',
                    'If you have any questions or suggestions, please don’t hesitate to {contact}.',
                ],
            ],
        ],

        terms: {
            cfp: 'Call for Proposals',
            contact: 'contact us',
        },
        og: {
            title: 'How to Propose a Tutorial?',
            description:
                'First of all, thank you for your interest in conducting a tutorial at PyCon Taiwan 2025. ' +
                'Generally speaking, good tutorials possess most of the traits that good talks have. ' +
                'The biggest differences between a tutorial and a talk are the hands-on nature of a tutorial, ' +
                'and the duration of the tutorial. As tutorials last longer than talks, well-prepared content is required ' +
                'but the content must stay interesting to keep the attendees engaged. ' +
                'Hence, you must have prior experience teaching coding to people. ' +
                'You might also want to consider bringing along teaching assistants for tutorials to assist you. ' +
                'We recommend at least two teaching assistants for a general class size of 20 people. ' +
                'Due to the differences mentioned above, speakers who are interested in conducting tutorials ' +
                'must satisfy at least one of the following prerequisites.',
        },
    },
    'zh-hant': {
        title: '如何投稿專業課程（Tutorial）？',
        intro: [
            '有關投稿的整體流程說明，請參考{cfp}一頁。',
            '首先，謝謝您考慮投稿專業課程至 PyCon Taiwan 2025。',
            '一般來說，好的課程滿足一場好演講的諸多特性。不過專業課程較演講最大的差異在課程有手把手的指導，以及較長的時間。' +
                '因為有更長的時間，專業課程需要準備更多的內容，並且讓聽眾即便在數個小時的講課與操作之後還能覺得有趣且清醒；' +
                '由於有手把手的指導，一個 20 名學員的課程通常要有兩位（以上）的助教來協助，過程中必須能與助教保持良好的溝通。',
            '上述兩個差異使得準備一個專業課程遠比準備演講需要更多練習和經驗。' +
                '因此，投稿課程的講師最好需要滿足以下至少一個前提：',
        ],
        requirements: [
            '曾經為程式會議或社群的課程講師。',
            '在開源社群中，擁有一次以上的演講經驗，並以 Python 在地社群為優。',
            '曾經是過去課程的助教。',
        ],
        proviso: '如果您比較缺乏上述的經驗，我們可能會請您先在社群試教。',

        policies: [
            [
                '課程長度',
                [
                    '專業課程的長度為 1.5 小時',
                    '在過往的經驗中，6 小時的課程對於講師以及學員而言都非常的累，學員容易因為疲勞而無法持續跟上進度，且難以吸收所學。' +
                        '全天的課程需要相當的教學經驗，為此今年改為 1.5 小時的課程。' +
                        '我們強烈建議清楚定義先備知識以及課程目標，以達到最佳的教學效果。',
                ],
            ],
            [
                '時間與場地',
                [
                    '專業課程與會期同時，將和 PyCon Taiwan 大會平行舉行，教室待定。',
                ],
            ],
            ['售票政策', ['本次會議專業課程不額外收費。']],
            [
                '如何成為講師',
                [
                    '最簡單也是最好的答案：多多參與各地 Python 的社群並多給演講吧！',
                    '如果有任何疑問或需要協助的地方，歡迎{contact}。',
                ],
            ],
        ],

        terms: {
            cfp: '投稿募集',
            contact: '聯繫我們',
        },
        og: {
            title: '如何投稿專業課程（Tutorial）？',
            description:
                '首先，謝謝您考慮投稿專業課程至 PyCon Taiwan 2025。' +
                '一般來說，好的課程滿足一場好演講的諸多特性。不過專業課程較演講最大的差異在課程有手把手的指導，以及較長的時間。' +
                '因為有更長的時間，專業課程需要準備更多的內容，並且讓聽眾即便在數個小時的講課與操作之後還能覺得有趣且清醒；' +
                '由於有手把手的指導，一個 20 名學員的課程通常要有兩位（以上）的助教來協助，過程中必須能與助教保持良好的溝通。' +
                '上述兩個差異使得準備一個專業課程遠比準備演講需要更多練習和經驗。',
        },
    },
})
