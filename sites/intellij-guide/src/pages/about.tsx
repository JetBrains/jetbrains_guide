import React from 'react';
// @ts-ignore
import splash from './intellij-idea-beam.svg';

import SiteLayout from 'gatsby-theme-bulmaio/src/components/layout/SiteLayout';
import {TwitterCardPage} from "gatsby-theme-bulmaio/src/components/layout/MasterLayout";

const dataUri = `url("${splash}") center center`;

const PAGE_TITLE = '关于';
const SUBTITLE = '关于 IntelliJ IDEA Guide';

const twitterCardPage: TwitterCardPage = {
    title: PAGE_TITLE,
    description: SUBTITLE,
    image: ''
};

const AboutPage: React.FC = () => {

    return (
        <SiteLayout pageTitle={PAGE_TITLE} twitterCardPage={twitterCardPage}>
            <main className="bd-main bulmaio-body">
                <div className="bd-main-container container" style={{marginBottom: '2rem'}}>
                    <header className="bd-header" style={{
                        marginBottom: 0,
                        minHeight: '6rem',
                        background: dataUri,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 1500
                    }}>
                        <h1 className="title">{PAGE_TITLE}</h1>
                    </header>

                    <div className="columns">
                        <div className="column is-three-quarters-desktop">
                            <div className="bd-content content">
                                <div className="content">
                                    <h2>
                                        什么是 IntelliJ IDEA Guide？
                                    </h2>
                                </div>

                                <p>
                                    IntelliJ IDEA 是由 JetBrains 打造的一个强大的开发者生产力工具，该从哪里学习来提升自己的操作技巧呢？
                                </p>

                                <p>您可以在我们的
                                    <a href="https://weibo.com/u/3220313942">微博帐号</a>
                                    或
                                    <a href="https://blog.jetbrains.com/zh-hans/">官方博客</a>
                                    以及
                                    <a href="https://www.jetbrains.com/zh-cn/idea//">官方文档</a>
                                    来取得相关材料。
                                </p>

                                <p>
                                    我们也创建了这个 IntelliJ IDEA Guide，一个视觉化材料的集中地让您可以快速上手学习。
                                    我们希望它能帮助您更快掌握 IDE 操作技巧，并让你的开发工作更高效。
                                </p>

                                <h2>
                                    反馈您的意见并参与项目
                                </h2>

                                <p>
                                    这份学习材料是一个开源项目，您可以在 <a href="https://github.com/JetBrains/jetbrains_guide">Github 上取得项目源码</a>。
                                    所有的内容是以 Markdown 格式撰写后再编译成静态网站。
                                    假如您想要参与这个项目，请查看 <a href="https://github.com/JetBrains/jetbrains_guide/blob/master/README.md">项目说明</a> 以取得更多信息。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </SiteLayout>
    );
};

export default AboutPage;
