import Image from "next/image";
import { useVehicleControl } from "../../model/useVehicleControl";
import styles from './MusicTab.module.scss';
import { useEffect, useState } from "react";
import { formatTime } from "@/shared/utils/format-time";
import { CarMediaAddToList, CarMediaNextTrack, CarMediaPause, CarMediaPlay, CarMediaPreviosTrack, Music } from "@/shared/ui/icons";

export const MusicTab = () => {
  const { media, mediaPrev, mediaNext, mediaToggle } = useVehicleControl();
  const [progress, setProgress] = useState(0);

  const track = media.playlist[media.currentTrack];

  useEffect(() => {
    if (!track) return;
    const percentage = (media.currentTime / track.duration) * 100;
    setProgress(percentage);
  }, [media.currentTime, track]);

  return (
    <section className={styles.container}>
      <h1>Music</h1>

      <div className={styles.player}>
        {track && (
          <Image
            className={styles.musicWrapper}
            src={track.cover}
            width={60}
            height={60}
            alt={`${track.artist} - ${track.title}`}
          />
        )}

        <div className={styles.music}>
          <p>{track?.artist}</p>
          <span>{track?.title}</span>

          <div className={styles.toolbar}>
            <p>
              <span>{formatTime(media.currentTime)}</span> / {track && formatTime(track.duration)}
            </p>
            <input
              type="range"
              min={0}
              max={100}
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              style={{ "--value": `${progress}%` } as React.CSSProperties}
            />
          </div>
        </div>

        <div className={styles.tools}>
          <CarMediaPreviosTrack onClick={mediaToggle} />
          {media.isPlaying ? <CarMediaPlay onClick={mediaToggle} /> : <CarMediaPause onClick={mediaToggle} />}
          <CarMediaNextTrack onClick={mediaToggle} />
        </div>

      </div>

      <h1>Song`s List</h1>
      <div className={styles.optionsButton}>
        <input type="text" placeholder="Enter the link" />
        <CarMediaAddToList className={styles.addIcon} onClick={() => { }} />
      </div>
      <ul className={styles.list}>

        <div className={styles.optionsButton}>
          <div className={styles.optionLeft}>
            <div className={styles.icon}>
              <Music fill="rgba(255,255,255,0.5)" />
            </div>
            <p>Song name</p>
          </div>
          <CarMediaPlay className={styles.addIcon} onClick={() => { }} />
        </div>
        <div className={styles.optionsButton}>
          <div className={styles.optionLeft}>
            <div className={styles.icon}>
              <Music fill="rgba(255,255,255,0.5)" />
            </div>
            <p>Song name</p>
          </div>
          <CarMediaPlay className={styles.addIcon} onClick={() => { }} />
        </div>
        <div className={styles.optionsButton}>
          <div className={styles.optionLeft}>
            <div className={styles.icon}>
              <Music fill="rgba(255,255,255,0.5)" />
            </div>
            <p>Song name</p>
          </div>
          <CarMediaPlay className={styles.addIcon} onClick={() => { }} />
        </div>
      </ul>

    </section>
  );
};
