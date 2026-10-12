import { Code2, Database, GitBranch, Layers3, Server, Sparkles } from 'lucide-react';
import { skills } from '../../data/portfolio';
import './Skills.css';
import {
    FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact,
    FaNodeJs, FaGitAlt, FaGithub, FaCloud,
    FaCode, FaServer
} from "react-icons/fa";

import {
    SiMui, SiExpress, SiEjs, SiMongodb, SiMysql,
    SiMongodb as SiMongoAtlas, SiRender, SiMysql as SiMySQLWorkbench,
    SiCloudinary, SiPostman
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const skillIcons = {
    HTML5: FaHtml5,
    CSS3: FaCss3Alt,
    JavaScript: FaJs,
    Bootstrap: FaBootstrap,
    "React.js": FaReact,
    "Material UI (MUI)": SiMui,

    "Node.js": FaNodeJs,
    "Express.js": SiExpress,
    EJS: SiEjs,
    "REST APIs": SiPostman,

    MongoDB: SiMongodb,
    MySQL: SiMysql,
    "MongoB Atlas": SiMongodb,

    "Git & GitHub": FaGithub,
    Cloudinary: SiCloudinary,
    Render: SiRender,
    "MySQL Workbench": SiMysql,
    "VS Code": VscVscode,
};

const icons = { Frontend: Layers3, Backend: Server, Database: Database, 'Tools & Technology': GitBranch };
export default function Skills() {
    return (
        <section className="section skills" id="skills">
            <div className="section-head reveal">
                <span>02 — Skills & toolkit</span>
                <h2>Technology is my <em>creative toolkit.</em></h2>
            </div>
            <div className="skills-top reveal">
                <div className="skills-intro">
                    <div className="skill-logo">
                        <Code2 />
                    </div>
                    <div>
                        <b>WEB DEVELOPMENT</b>
                        <p>Focused on responsive interfaces,
                            component-based React development
                            and practical full-stack features.
                        </p>
                    </div>
                </div>
                <div className="skill-badge">
                    <Sparkles />
                    <span>
                        Always learning
                    </span>
                </div>
            </div>
            <div className="skills-grid">
                {['Frontend', 'Backend', 'Database', 'Tools & Technology'].map(group => {
                    const Icon = icons[group];
                    return (
                        <div className="skill-group reveal"
                            key={group}>
                            <div className="group-title">
                                <Icon />
                                <span>
                                    {group}
                                </span>
                            </div>
                            {skills.filter(s =>
                                s.group === group).map(s =>
                                    <div className="skill-row"
                                        key={s.name}>
                                        <div>

                                            <b className="skill-name">
                                                {(() => {
                                                    const SkillIcon = skillIcons[s.name];
                                                    return SkillIcon ? <SkillIcon className="skill-icon" /> : null;
                                                })()}
                                                {s.name}
                                            </b>

                                            <span>
                                                {s.level}%
                                            </span>
                                        </div>
                                        <div className="bar">
                                            <i style={{ width: `${s.level}%` }} />
                                        </div>
                                    </div>
                                )}
                        </div>
                    )
                })}
            </div>
            <div className="skill-marquee">
                <span>
                    REACT
                </span>
                <i />
                <span>JAVASCRIPT</span>
                <i />
                <span>NODE.JS</span>
                <i />
                <span>MONGODB</span>
                <i />
                <span>EXPRESS</span>
                <i />
                <span>CSS</span>
                <i />
                <span>GIT</span>
            </div>
        </section>
    )
}
