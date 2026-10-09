import { Award, CalendarDays, GraduationCap } from 'lucide-react';
import './Education.css';
export default function Education() {
    return (
        <section className="section education" id="education">
            <div className="section-head reveal">
                <span>04 — Education</span>
                <h2>
                    The foundation behind <em>the code.</em>
                </h2>
            </div>
            <div className="edu-wrap reveal">
                <div className="edu-line" />
                <div className="edu-dot" />
                <div className="edu-card">
                    <div className="edu-icon">
                        <GraduationCap />
                    </div>
                    <div className="edu-content">
                        <div className="edu-top">
                            <span>2023 — 2026</span>
                            <b>COMPLETED</b>
                        </div>
                        <h3>B.Sc. Computer Science</h3>
                        <p>SN College, Bhayandar · University of Mumbai</p>
                        <div className="edu-meta">
                            <span>
                                <Award />
                                CGPA
                                <b>9.18</b>
                            </span>
                            <span>
                                <CalendarDays />
                                Graduated in 2026
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
