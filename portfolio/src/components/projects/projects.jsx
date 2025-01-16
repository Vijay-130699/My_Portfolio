import React from 'react'
import styles from './styles.module.scss'
import { our_project_label, project_content, project_four_label, project_four_url, project_one_label, project_one_url, project_three_label, project_three_url, project_two_label, project_two_url, projects_labels } from '../../helpers/constants'
import project_one from '../../assets/images/project-1.jpg'
import project_two from '../../assets/images/project-2.jpg'
import project_three from '../../assets/images/project-3.jpg'
import project_four from '../../assets/images/project-4.jpg'


const Projects = () => {

    const routeToPage = (number) => {
        switch (number) {
            case 'one': window.open(project_one_url, '_blank').focus();
                break
            case 'two': window.open(project_two_url, '_blank').focus();
                break
            case 'three': window.open(project_three_url, '_blank').focus();
                break
            case 'four': window.open(project_four_url, '_blank').focus();
                break
            default: return;
        }
    }

    return (
        <div className={styles.container} id='projects'>
            <div className={styles.projects_label_container}>
                <label className={styles.project_label_positioned}>{projects_labels}</label>
                <label className={styles.our_project_label}>
                    {our_project_label}
                </label>
            </div>
            <div className={styles.description_container}>
                <p className={styles.description_label}>
                    {project_content}
                </p>
            </div>
            <div className={styles.project_box_component}>
                <div className={styles.set_one_container}>
                    <div className={styles.project_container}>
                        <div className={styles.project_one_container} onClick={() => routeToPage('one')}>
                            <img loading='lazy' alt='project' src={project_one} className={styles.project_image} />
                            <div className={styles.project_name}>{project_one_label}</div>
                        </div>
                        <div className={styles.project_one_container} onClick={() => routeToPage('two')}>
                            <img loading='lazy' alt='project' src={project_two} className={styles.project_image} />
                            <div className={styles.project_name}>{project_two_label}</div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.project_box_component}>
                <div className={styles.set_one_container}>
                    <div className={styles.project_container}>
                        <div className={styles.project_one_container} onClick={() => routeToPage('three')}>
                            <img loading='lazy' alt='project' src={project_three} className={styles.project_image} />
                            <div className={styles.project_name}>{project_three_label}</div>
                        </div>
                        <div className={styles.project_one_container} onClick={() => routeToPage('four')}>
                            <img loading='lazy' alt='project' src={project_four} className={styles.project_image} />
                            <div className={styles.project_name}>{project_four_label}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects