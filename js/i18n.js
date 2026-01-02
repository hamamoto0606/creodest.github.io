// CreoDest 多言語対応 JavaScript

const translations = {
  ja: {
    nav: {
      home: 'ホーム',
      philosophy: '思想',
      whatWeDo: '私たちの価値',
      howWeWork: '働き方',
      company: '会社概要',
      contact: 'お問い合わせ'
    },
    hero: {
      title: '人生の制約を、<br><span class="highlight">働く制約にしない</span>会社',
      philosophy: '非対称性はなくならない。<br>だから私たちは、構造とイノベーションでそれを溶かす。',
      cta: '私たちの思想を知る'
    },
    values: {
      title: '私たちの価値観',
      distributed: {
        title: '分散前提の組織',
        desc: '人を一箇所に集めることで価値を出すのではなく、分散したまま価値が循環し続ける構造をつくる。'
      },
      global: {
        title: 'グローバルに拠点を持つ',
        desc: '世界各地に拠点を持ち、多様な視点と知識の循環によって、より良い価値を生み出す。'
      },
      longterm: {
        title: '長期LTV志向',
        desc: '短期的な成果ではなく、長期的に価値を積み上げていく関係を築く。'
      },
      structure: {
        title: '構造による価値創出',
        desc: '個人の能力に依存するのではなく、構造とシステムによって持続的な価値を生み出す。'
      }
    },
    message: {
      text: 'CreoDestは、<br>人を一箇所に集めることで価値を出す会社ではない。<br>人が分散したまま、価値が循環し続ける構造をつくる会社である。'
    },
    contact: {
      title: 'お問い合わせ',
      description: 'CreoDestへのお問い合わせは、以下のメールアドレスからお願いいたします。',
      pageTitle: 'お問い合わせ',
      pageSubtitle: 'Contact',
      methodTitle: 'お問い合わせ方法',
      methodDesc: 'CreoDestへのお問い合わせは、以下のメールアドレスからお願いいたします。ご相談、お見積もりのご依頼など、お気軽にお問い合わせください。',
      responseNote: '※お問い合わせいただいた内容につきましては、原則として2営業日以内にご返信いたします。'
    },
    footer: {
      copyright: '© 2026 CreoDest All Rights Reserved.'
    },
    // Philosophy page
    philosophy: {
      pageTitle: '思想',
      pageSubtitle: 'Philosophy',
      coreTitle: '人生の制約を前提にする',
      coreText1: '人には様々な制約がある。育児、介護、健康、学習、地理的な制約。これらは「例外」ではなく、人生の「前提」である。',
      coreText2: '私たちは、これらの制約を「働く上での障害」として扱わない。むしろ、多様な制約を持つ人々が、それぞれの強みを発揮できる構造をつくることで、より大きな価値を生み出せると考えている。',
      asymmetryTitle: '非対称性を溶かす',
      asymmetryText1: '情報の非対称性、機会の非対称性、能力の非対称性。世の中には様々な非対称性が存在する。',
      asymmetryText2: 'これらの非対称性は完全になくなることはない。しかし、構造とイノベーションによって、その影響を最小化することはできる。',
      asymmetryText3: '私たちは、テクノロジーと仕組みの力で、非対称性を溶かし、より公平な価値創出の場をつくることを目指している。'
    },
    // What We Do page
    whatWeDo: {
      pageTitle: '私たちの価値',
      pageSubtitle: 'What We Do',
      intro: 'クライアントごとに異なる課題に対して、構造的なアプローチで向き合う。',
      approachTitle: '私たちのアプローチ',
      approach1: {
        title: '長期的な視点',
        desc: '短期的な成果だけでなく、長期的な価値創出を重視する。クライアントのビジネスが持続的に成長するための基盤づくりを支援する。'
      },
      approach2: {
        title: '現場に寄り添う',
        desc: '「外部の専門家」という立場にとどまらず、クライアントの一員として並走する。現場の声を丁寧に聞き、実務に即した解決策を提案する。'
      },
      approach3: {
        title: '業務 × テクノロジー',
        desc: 'テクノロジーは手段であり、目的ではない。業務を深く理解した上で、テクノロジーを適切に組み合わせることで、実効性のある解決策を提供する。'
      },
      valueTitle: '提供する価値',
      value1: {
        title: '構想から実行まで',
        desc: 'システム導入・刷新に関する構想支援から要件定義、プロジェクト推進、定着・運用フェーズまで、一貫して支援する。'
      },
      value2: {
        title: '課題の本質を捉える',
        desc: '現場ヒアリングや業務分析を通じて、表面的な問題だけでなく、根本的な課題を抽出する。'
      },
      value3: {
        title: '持続可能な仕組みづくり',
        desc: '導入後の定着・運用を見据えた業務設計と、組織が自走できる仕組みづくりを支援する。'
      }
    },
    // How We Work page
    howWeWork: {
      pageTitle: '働き方',
      pageSubtitle: 'How We Work',
      intro: '人生の制約を、働く制約にしない。<br>そのための働き方を、私たちは実践している。',
      principlesTitle: '働き方の原則',
      principle1: {
        title: '分散前提',
        desc: '基本は分散して働くことを前提としながら、必要に応じて集まることも大切にする。どこにいても、価値を発揮できる環境を整える。'
      },
      principle2: {
        title: '人生事情を尊重する',
        desc: '育児、介護、健康、学習。人生の様々な事情を「例外」ではなく「前提」として扱う。'
      },
      principle3: {
        title: 'ツール・テクノロジー活用前提',
        desc: '最新のツールとテクノロジーを積極的に活用し、効率的なコミュニケーションと業務遂行を実現する。'
      },
      principle4: {
        title: '継続的に改善する文化',
        desc: '働き方自体も、常に改善の対象である。より良い方法があれば、躊躇なく変えていく。'
      }
    },
    // Company page
    company: {
      pageTitle: '会社概要',
      pageSubtitle: 'Company',
      infoTitle: '会社情報',
      companyName: '会社名',
      companyNameValue: 'CreoDest（クレオデスト）',
      ceo: '代表取締役',
      ceoName: '濱本 一弥',
      address: '所在地',
      addressValue: '〒220-0004<br>神奈川県横浜市西区北幸1-11-1<br>水信ビル7階',
      contactLabel: 'お問い合わせ',
      note: '※ 所在地は登記上の住所です。私たちは分散型の組織であり、特定の場所に集まることを前提としていません。'
    },
    // Contact page
    contactPage: {
      pageTitle: 'お問い合わせ',
      pageSubtitle: 'Contact',
      methodTitle: 'お問い合わせ方法',
      methodDesc: 'CreoDestへのお問い合わせは、以下のメールアドレスからお願いいたします。<br>ご相談、お見積もりのご依頼など、お気軽にお問い合わせください。',
      note: '※お問い合わせいただいた内容につきましては、原則として2営業日以内にご返信いたします。',
      companyInfoTitle: '会社情報',
      addressLabel: '所在地',
      addressNote: '※ 所在地は登記上の住所です。私たちは分散型の組織であり、特定の場所に集まることを前提としていません。'
    }
  },
  en: {
    nav: {
      home: 'Home',
      philosophy: 'Philosophy',
      whatWeDo: 'What We Do',
      howWeWork: 'How We Work',
      company: 'Company',
      contact: 'Contact'
    },
    hero: {
      title: 'A company where <br><span class="highlight">life constraints</span> don\'t become work constraints',
      philosophy: 'Asymmetry never disappears.<br>That\'s why we dissolve it through structure and innovation.',
      cta: 'Learn Our Philosophy'
    },
    values: {
      title: 'Our Values',
      distributed: {
        title: 'Distributed Organization',
        desc: 'We don\'t create value by gathering people in one place. We build structures where value circulates while people remain distributed.'
      },
      global: {
        title: 'Global Presence',
        desc: 'With locations around the world, we create better value through diverse perspectives and knowledge circulation.'
      },
      longterm: {
        title: 'Long-term LTV Focus',
        desc: 'We build relationships that accumulate value over the long term, not just short-term results.'
      },
      structure: {
        title: 'Value Through Structure',
        desc: 'We create sustainable value through structure and systems, not by depending on individual capabilities.'
      }
    },
    message: {
      text: 'CreoDest is not a company that creates value by gathering people in one place.<br>We are a company that builds structures where value continues to circulate while people remain distributed.'
    },
    contact: {
      title: 'Contact',
      description: 'For inquiries to CreoDest, please use the email address below.',
      pageTitle: 'Contact',
      pageSubtitle: 'Contact',
      methodTitle: 'How to Contact Us',
      methodDesc: 'For inquiries to CreoDest, please use the email address below. Feel free to contact us for consultations or quote requests.',
      responseNote: '* We will respond to your inquiry within 2 business days in principle.'
    },
    footer: {
      copyright: '© 2026 CreoDest All Rights Reserved.'
    },
    philosophy: {
      pageTitle: 'Philosophy',
      pageSubtitle: 'Philosophy',
      coreTitle: 'Life Constraints as a Premise',
      coreText1: 'People have various constraints. Childcare, nursing care, health, learning, geographical constraints. These are not "exceptions" but "premises" of life.',
      coreText2: 'We don\'t treat these constraints as "obstacles to work." Rather, we believe that by creating structures where people with diverse constraints can leverage their strengths, we can create greater value.',
      asymmetryTitle: 'Dissolving Asymmetry',
      asymmetryText1: 'Information asymmetry, opportunity asymmetry, capability asymmetry. Various asymmetries exist in the world.',
      asymmetryText2: 'These asymmetries will never completely disappear. However, through structure and innovation, their impact can be minimized.',
      asymmetryText3: 'We aim to dissolve asymmetry through the power of technology and systems, creating a more equitable space for value creation.'
    },
    whatWeDo: {
      pageTitle: 'What We Do',
      pageSubtitle: 'What We Do',
      intro: 'We face each client\'s unique challenges with a structural approach.',
      approachTitle: 'Our Approach',
      approach1: {
        title: 'Long-term Perspective',
        desc: 'We focus not only on short-term results but on long-term value creation. We support building foundations for sustainable business growth.'
      },
      approach2: {
        title: 'Standing with the Field',
        desc: 'We don\'t just stand as "external experts" but walk alongside as part of the client\'s team. We listen carefully to field voices and propose practical solutions.'
      },
      approach3: {
        title: 'Business × Technology',
        desc: 'Technology is a means, not an end. By deeply understanding business and appropriately combining technology, we provide effective solutions.'
      },
      valueTitle: 'Value We Provide',
      value1: {
        title: 'From Concept to Execution',
        desc: 'We provide consistent support from concept planning for system implementation/renewal, requirements definition, project promotion, to adoption and operation phases.'
      },
      value2: {
        title: 'Capturing the Essence',
        desc: 'Through field interviews and business analysis, we extract not just surface problems but fundamental issues.'
      },
      value3: {
        title: 'Sustainable Systems',
        desc: 'We support business design with post-implementation adoption and operation in mind, and help build systems that enable organizations to run independently.'
      }
    },
    howWeWork: {
      pageTitle: 'How We Work',
      pageSubtitle: 'How We Work',
      intro: 'Life constraints don\'t become work constraints.<br>We practice this way of working.',
      principlesTitle: 'Work Principles',
      principle1: {
        title: 'Distributed by Default',
        desc: 'We work distributed by default, while also valuing coming together when needed. We create an environment where you can deliver value from anywhere.'
      },
      principle2: {
        title: 'Respecting Life Circumstances',
        desc: 'Childcare, nursing care, health, learning. We treat life\'s various circumstances not as "exceptions" but as "premises."'
      },
      principle3: {
        title: 'Tool & Technology First',
        desc: 'We actively utilize the latest tools and technology to achieve efficient communication and work execution.'
      },
      principle4: {
        title: 'Culture of Continuous Improvement',
        desc: 'Our way of working is always subject to improvement. If there\'s a better way, we change without hesitation.'
      }
    },
    company: {
      pageTitle: 'Company',
      pageSubtitle: 'Company',
      infoTitle: 'Company Information',
      companyName: 'Company Name',
      companyNameValue: 'CreoDest',
      ceo: 'CEO',
      ceoName: 'Kazuya Hamamoto',
      address: 'Address',
      addressValue: 'Suishin Building 7F,<br>1-11-1 Kitasaiwai, Nishi-ku,<br>Yokohama, Kanagawa 220-0004, Japan',
      contactLabel: 'Contact',
      note: '* The address is our registered office. We are a distributed organization and do not assume gathering at a specific location.'
    },
    contactPage: {
      pageTitle: 'Contact',
      pageSubtitle: 'Contact',
      methodTitle: 'How to Contact Us',
      methodDesc: 'For inquiries to CreoDest, please use the email address below.<br>Feel free to contact us for consultations or quote requests.',
      note: '* We will respond to your inquiry within 2 business days in principle.',
      companyInfoTitle: 'Company Information',
      addressLabel: 'Address',
      addressNote: '* The address is our registered office. We are a distributed organization and do not assume gathering at a specific location.'
    }
  },
  zh: {
    nav: {
      home: '首页',
      philosophy: '理念',
      whatWeDo: '我们的价值',
      howWeWork: '工作方式',
      company: '公司概况',
      contact: '联系我们'
    },
    hero: {
      title: '不让人生的制约<br>成为<span class="highlight">工作的制约</span>的公司',
      philosophy: '不对称性不会消失。<br>因此，我们通过结构和创新来化解它。',
      cta: '了解我们的理念'
    },
    values: {
      title: '我们的价值观',
      distributed: {
        title: '分布式组织',
        desc: '我们不是通过将人聚集在一处来创造价值，而是构建让价值在分布状态下持续循环的结构。'
      },
      global: {
        title: '全球布局',
        desc: '在世界各地设有据点，通过多元视角和知识循环创造更好的价值。'
      },
      longterm: {
        title: '长期LTV导向',
        desc: '我们建立的是长期积累价值的关系，而非追求短期成果。'
      },
      structure: {
        title: '通过结构创造价值',
        desc: '我们不依赖个人能力，而是通过结构和系统创造可持续的价值。'
      }
    },
    message: {
      text: 'CreoDest不是一家通过将人聚集在一处来创造价值的公司。<br>我们是一家构建让价值在分布状态下持续循环的结构的公司。'
    },
    contact: {
      title: '联系我们',
      description: '如需联系CreoDest，请使用以下邮箱地址。',
      pageTitle: '联系我们',
      pageSubtitle: 'Contact',
      methodTitle: '联系方式',
      methodDesc: '如需联系CreoDest，请使用以下邮箱地址。咨询、报价等，欢迎随时联系。',
      responseNote: '※ 我们原则上会在2个工作日内回复您的咨询。'
    },
    footer: {
      copyright: '© 2026 CreoDest 版权所有。'
    },
    philosophy: {
      pageTitle: '理念',
      pageSubtitle: 'Philosophy',
      coreTitle: '以人生的制约为前提',
      coreText1: '人有各种各样的制约。育儿、护理、健康、学习、地理制约。这些不是"例外"，而是人生的"前提"。',
      coreText2: '我们不把这些制约当作"工作的障碍"。相反，我们认为通过创建让具有各种制约的人能够发挥各自优势的结构，可以创造更大的价值。',
      asymmetryTitle: '化解不对称性',
      asymmetryText1: '信息不对称、机会不对称、能力不对称。世界上存在各种不对称性。',
      asymmetryText2: '这些不对称性永远不会完全消失。但是，通过结构和创新，可以将其影响最小化。',
      asymmetryText3: '我们致力于通过技术和机制的力量化解不对称性，创造更公平的价值创造空间。'
    },
    whatWeDo: {
      pageTitle: '我们的价值',
      pageSubtitle: 'What We Do',
      intro: '我们以结构化的方法面对每个客户不同的课题。',
      approachTitle: '我们的方法',
      approach1: {
        title: '长期视角',
        desc: '我们不仅重视短期成果，更重视长期价值创造。我们支持建立客户业务可持续增长的基础。'
      },
      approach2: {
        title: '贴近现场',
        desc: '我们不仅仅是"外部专家"，而是作为客户团队的一员并肩前行。我们认真倾听现场的声音，提出切合实际的解决方案。'
      },
      approach3: {
        title: '业务 × 技术',
        desc: '技术是手段，而非目的。在深入理解业务的基础上，适当结合技术，提供有效的解决方案。'
      },
      valueTitle: '我们提供的价值',
      value1: {
        title: '从构想到执行',
        desc: '从系统导入/更新的构想支援、需求定义、项目推进到落地运营阶段，提供一贯的支持。'
      },
      value2: {
        title: '把握问题本质',
        desc: '通过现场访谈和业务分析，不仅提取表面问题，还挖掘根本性课题。'
      },
      value3: {
        title: '可持续的机制建设',
        desc: '我们支持着眼于导入后落地运营的业务设计，以及帮助组织能够自主运行的机制建设。'
      }
    },
    howWeWork: {
      pageTitle: '工作方式',
      pageSubtitle: 'How We Work',
      intro: '不让人生的制约成为工作的制约。<br>我们实践这样的工作方式。',
      principlesTitle: '工作原则',
      principle1: {
        title: '分布式前提',
        desc: '我们以分布式工作为基本前提，同时也重视必要时的聚集。无论身在何处，都能创造价值的环境。'
      },
      principle2: {
        title: '尊重人生状况',
        desc: '育儿、护理、健康、学习。我们将人生的各种状况不是作为"例外"，而是作为"前提"来对待。'
      },
      principle3: {
        title: '工具・技术活用前提',
        desc: '积极活用最新的工具和技术，实现高效的沟通和业务执行。'
      },
      principle4: {
        title: '持续改善的文化',
        desc: '工作方式本身也始终是改善的对象。如果有更好的方法，我们会毫不犹豫地改变。'
      }
    },
    company: {
      pageTitle: '公司概况',
      pageSubtitle: 'Company',
      infoTitle: '公司信息',
      companyName: '公司名称',
      companyNameValue: 'CreoDest',
      ceo: '代表董事',
      ceoName: '濱本 一弥',
      address: '地址',
      addressValue: '〒220-0004<br>日本神奈川县横滨市西区北幸1-11-1<br>水信大厦7楼',
      contactLabel: '联系方式',
      note: '※ 地址为注册地址。我们是分布式组织，不以在特定地点聚集为前提。'
    },
    contactPage: {
      pageTitle: '联系我们',
      pageSubtitle: 'Contact',
      methodTitle: '联系方式',
      methodDesc: '如需联系CreoDest，请使用以下邮箱地址。<br>咨询、报价等，欢迎随时联系。',
      note: '※ 我们原则上会在2个工作日内回复您的咨询。',
      companyInfoTitle: '公司信息',
      addressLabel: '地址',
      addressNote: '※ 地址为注册地址。我们是分布式组织，不以在特定地点聚集为前提。'
    }
  },
  vi: {
    nav: {
      home: 'Trang chủ',
      philosophy: 'Triết lý',
      whatWeDo: 'Giá trị của chúng tôi',
      howWeWork: 'Cách làm việc',
      company: 'Về công ty',
      contact: 'Liên hệ'
    },
    hero: {
      title: 'Công ty nơi <br><span class="highlight">những ràng buộc cuộc sống</span> không trở thành ràng buộc công việc',
      philosophy: 'Sự bất đối xứng không bao giờ biến mất.<br>Vì vậy, chúng tôi hòa tan nó thông qua cấu trúc và đổi mới.',
      cta: 'Tìm hiểu triết lý của chúng tôi'
    },
    values: {
      title: 'Giá trị của chúng tôi',
      distributed: {
        title: 'Tổ chức phân tán',
        desc: 'Chúng tôi không tạo ra giá trị bằng cách tập hợp mọi người tại một nơi. Chúng tôi xây dựng cấu trúc nơi giá trị tiếp tục lưu chuyển trong khi mọi người vẫn phân tán.'
      },
      global: {
        title: 'Hiện diện toàn cầu',
        desc: 'Với các địa điểm trên khắp thế giới, chúng tôi tạo ra giá trị tốt hơn thông qua các góc nhìn đa dạng và sự lưu chuyển kiến thức.'
      },
      longterm: {
        title: 'Định hướng LTV dài hạn',
        desc: 'Chúng tôi xây dựng các mối quan hệ tích lũy giá trị trong dài hạn, không chỉ là kết quả ngắn hạn.'
      },
      structure: {
        title: 'Giá trị thông qua cấu trúc',
        desc: 'Chúng tôi tạo ra giá trị bền vững thông qua cấu trúc và hệ thống, không phụ thuộc vào năng lực cá nhân.'
      }
    },
    message: {
      text: 'CreoDest không phải là công ty tạo ra giá trị bằng cách tập hợp mọi người tại một nơi.<br>Chúng tôi là công ty xây dựng cấu trúc nơi giá trị tiếp tục lưu chuyển trong khi mọi người vẫn phân tán.'
    },
    contact: {
      title: 'Liên hệ',
      description: 'Để liên hệ với CreoDest, vui lòng sử dụng địa chỉ email dưới đây.',
      pageTitle: 'Liên hệ',
      pageSubtitle: 'Contact',
      methodTitle: 'Cách liên hệ với chúng tôi',
      methodDesc: 'Để liên hệ với CreoDest, vui lòng sử dụng địa chỉ email dưới đây. Hãy liên hệ với chúng tôi để được tư vấn hoặc yêu cầu báo giá.',
      responseNote: '※ Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 2 ngày làm việc theo nguyên tắc.'
    },
    footer: {
      copyright: '© 2026 CreoDest Bảo lưu mọi quyền.'
    },
    philosophy: {
      pageTitle: 'Triết lý',
      pageSubtitle: 'Philosophy',
      coreTitle: 'Lấy ràng buộc cuộc sống làm tiền đề',
      coreText1: 'Con người có nhiều ràng buộc khác nhau. Nuôi con, chăm sóc người thân, sức khỏe, học tập, ràng buộc địa lý. Đây không phải là "ngoại lệ" mà là "tiền đề" của cuộc sống.',
      coreText2: 'Chúng tôi không coi những ràng buộc này là "trở ngại cho công việc". Thay vào đó, chúng tôi tin rằng bằng cách tạo ra cấu trúc nơi những người có các ràng buộc đa dạng có thể phát huy thế mạnh của mình, chúng tôi có thể tạo ra giá trị lớn hơn.',
      asymmetryTitle: 'Hòa tan sự bất đối xứng',
      asymmetryText1: 'Bất đối xứng thông tin, bất đối xứng cơ hội, bất đối xứng năng lực. Nhiều loại bất đối xứng tồn tại trên thế giới.',
      asymmetryText2: 'Những bất đối xứng này sẽ không bao giờ hoàn toàn biến mất. Tuy nhiên, thông qua cấu trúc và đổi mới, tác động của chúng có thể được giảm thiểu.',
      asymmetryText3: 'Chúng tôi hướng đến việc hòa tan sự bất đối xứng thông qua sức mạnh của công nghệ và hệ thống, tạo ra không gian công bằng hơn cho việc tạo ra giá trị.'
    },
    whatWeDo: {
      pageTitle: 'Giá trị của chúng tôi',
      pageSubtitle: 'What We Do',
      intro: 'Chúng tôi đối mặt với các thách thức riêng của từng khách hàng bằng cách tiếp cận có cấu trúc.',
      approachTitle: 'Cách tiếp cận của chúng tôi',
      approach1: {
        title: 'Góc nhìn dài hạn',
        desc: 'Chúng tôi không chỉ tập trung vào kết quả ngắn hạn mà còn vào việc tạo ra giá trị dài hạn. Chúng tôi hỗ trợ xây dựng nền tảng cho sự tăng trưởng bền vững của doanh nghiệp.'
      },
      approach2: {
        title: 'Đồng hành cùng hiện trường',
        desc: 'Chúng tôi không chỉ đứng như "chuyên gia bên ngoài" mà đồng hành như một phần của đội ngũ khách hàng. Chúng tôi lắng nghe cẩn thận tiếng nói từ hiện trường và đề xuất giải pháp thực tế.'
      },
      approach3: {
        title: 'Nghiệp vụ × Công nghệ',
        desc: 'Công nghệ là phương tiện, không phải mục đích. Bằng cách hiểu sâu nghiệp vụ và kết hợp công nghệ phù hợp, chúng tôi cung cấp giải pháp hiệu quả.'
      },
      valueTitle: 'Giá trị chúng tôi mang lại',
      value1: {
        title: 'Từ ý tưởng đến thực thi',
        desc: 'Chúng tôi cung cấp hỗ trợ nhất quán từ lập kế hoạch triển khai/đổi mới hệ thống, định nghĩa yêu cầu, thúc đẩy dự án đến giai đoạn áp dụng và vận hành.'
      },
      value2: {
        title: 'Nắm bắt bản chất',
        desc: 'Thông qua phỏng vấn hiện trường và phân tích nghiệp vụ, chúng tôi không chỉ trích xuất vấn đề bề mặt mà còn các vấn đề cơ bản.'
      },
      value3: {
        title: 'Hệ thống bền vững',
        desc: 'Chúng tôi hỗ trợ thiết kế nghiệp vụ với tầm nhìn về việc áp dụng và vận hành sau triển khai, và giúp xây dựng hệ thống cho phép tổ chức tự vận hành.'
      }
    },
    howWeWork: {
      pageTitle: 'Cách làm việc',
      pageSubtitle: 'How We Work',
      intro: 'Những ràng buộc cuộc sống không trở thành ràng buộc công việc.<br>Chúng tôi thực hành cách làm việc này.',
      principlesTitle: 'Nguyên tắc làm việc',
      principle1: {
        title: 'Phân tán là mặc định',
        desc: 'Chúng tôi làm việc phân tán theo mặc định, đồng thời cũng coi trọng việc tập hợp khi cần thiết. Chúng tôi tạo ra môi trường nơi bạn có thể mang lại giá trị từ bất cứ đâu.'
      },
      principle2: {
        title: 'Tôn trọng hoàn cảnh cuộc sống',
        desc: 'Nuôi con, chăm sóc người thân, sức khỏe, học tập. Chúng tôi coi các hoàn cảnh khác nhau của cuộc sống không phải là "ngoại lệ" mà là "tiền đề".'
      },
      principle3: {
        title: 'Công cụ & Công nghệ là ưu tiên',
        desc: 'Chúng tôi tích cực sử dụng các công cụ và công nghệ mới nhất để đạt được giao tiếp hiệu quả và thực thi công việc.'
      },
      principle4: {
        title: 'Văn hóa cải tiến liên tục',
        desc: 'Cách làm việc của chúng tôi luôn là đối tượng cải tiến. Nếu có cách tốt hơn, chúng tôi thay đổi không do dự.'
      }
    },
    company: {
      pageTitle: 'Về công ty',
      pageSubtitle: 'Company',
      infoTitle: 'Thông tin công ty',
      companyName: 'Tên công ty',
      companyNameValue: 'CreoDest',
      ceo: 'Giám đốc điều hành',
      ceoName: 'Kazuya Hamamoto',
      address: 'Địa chỉ',
      addressValue: 'Tòa nhà Suishin Tầng 7,<br>1-11-1 Kitasaiwai, Nishi-ku,<br>Yokohama, Kanagawa 220-0004, Nhật Bản',
      contactLabel: 'Liên hệ',
      note: '※ Địa chỉ là văn phòng đăng ký của chúng tôi. Chúng tôi là tổ chức phân tán và không giả định tập hợp tại một địa điểm cụ thể.'
    },
    contactPage: {
      pageTitle: 'Liên hệ',
      pageSubtitle: 'Contact',
      methodTitle: 'Cách liên hệ với chúng tôi',
      methodDesc: 'Để liên hệ với CreoDest, vui lòng sử dụng địa chỉ email dưới đây.<br>Hãy liên hệ với chúng tôi để được tư vấn hoặc yêu cầu báo giá.',
      note: '※ Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 2 ngày làm việc theo nguyên tắc.',
      companyInfoTitle: 'Thông tin công ty',
      addressLabel: 'Địa chỉ',
      addressNote: '※ Địa chỉ là văn phòng đăng ký của chúng tôi. Chúng tôi là tổ chức phân tán và không giả định tập hợp tại một địa điểm cụ thể.'
    }
  }
};

// 現在の言語を取得（ローカルストレージから、なければブラウザ設定から）
function getCurrentLanguage() {
  const stored = localStorage.getItem('creodest-lang');
  if (stored && translations[stored]) {
    return stored;
  }
  
  // ブラウザの言語設定を確認
  const browserLang = navigator.language.split('-')[0];
  if (translations[browserLang]) {
    return browserLang;
  }
  
  return 'ja'; // デフォルトは日本語
}

// 言語を設定
function setLanguage(lang) {
  if (!translations[lang]) return;
  
  localStorage.setItem('creodest-lang', lang);
  applyTranslations(lang);
  updateLanguageSwitcher(lang);
}

// 翻訳を適用
function applyTranslations(lang) {
  const t = translations[lang];
  
  // ナビゲーション
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const keys = key.split('.');
    let value = t;
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        value = null;
        break;
      }
    }
    if (value) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.innerHTML = value;
      }
    }
  });
  
  // HTML lang属性を更新
  document.documentElement.lang = lang;
}

// 言語切り替えボタンを更新
function updateLanguageSwitcher(lang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-lang') === lang) {
      btn.classList.add('active');
    }
  });
}

// 初期化
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = getCurrentLanguage();
  applyTranslations(currentLang);
  updateLanguageSwitcher(currentLang);
  
  // 言語切り替えボタンのイベント
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.getAttribute('data-lang');
      setLanguage(lang);
    });
  });
});
