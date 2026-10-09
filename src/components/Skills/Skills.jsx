import { Code2, Database, GitBranch, Layers3, Server, Sparkles } from 'lucide-react';
import { skills } from '../../data/portfolio';
import './Skills.css';
const icons = { Frontend: Layers3, Backend: Server, Database: Database, Tools: GitBranch };
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
                {['Frontend', 'Backend', 'Database', 'Tools'].map(group => {
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
                                            <b>
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
