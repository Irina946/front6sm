import { useEffect, useState } from 'react';
import styles from './selectedTheme.module.css';
import { SettingsParameters } from '../settings-parameters/settingsParameters';
import { type SubtopicTheme } from '../selected-module/SelectedModule';

interface SelectedThemeProps {
  objectTheme: SubtopicTheme
}

export function SelectedTheme(props: SelectedThemeProps): JSX.Element {
  const [objectTheme, setObjectTheme] = useState(props.objectTheme);

  const toogleThemeVisible = (idx: number): void => {
    const newSubtopics = objectTheme.subtopic.map((theme, index) => {
      if (index === idx) {
        return { ...theme, isVisible: !theme.isVisible };
      }
      return theme;
    });

    setObjectTheme({ ...objectTheme, subtopic: newSubtopics });
  };

  useEffect(() => {
    setObjectTheme(props.objectTheme);
  }, [props.objectTheme]);

  return (
    <div className={styles.allCreate}>
      <div className={styles.selectedTheme}>
        {objectTheme.subtopic.map((topic, idx) => (
          <div
            key={topic.id}
          >
            <input
              id={`${idx}`}
              type="checkbox"
              defaultChecked={topic.isVisible}
              name="parameters"
              className={styles.customCheckbox}
              onClick={() => { toogleThemeVisible(idx); }}
            />
            <label
              className={styles.label}
              htmlFor={`${idx}`}
            >
              {topic.nameTopic}
            </label>
          </div>
        ))}
      </div>
      <SettingsParameters selectedTheme={objectTheme} />
    </div>);
}
