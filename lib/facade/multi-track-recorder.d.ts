import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { MtkState } from '../types';
/**
 * Represents the multi track recorder (Ui24R only)
 */
export declare class MultiTrackRecorder {
    private conn;
    private store;
    /** Current state (playing, stopped, paused) */
    state$: import("rxjs").Observable<MtkState>;
    /** Current session name (e.g. `0001` or individual name) */
    session$: import("rxjs").Observable<string>;
    /** Current session length in seconds */
    length$: import("rxjs").Observable<number>;
    /** Elapsed time of current session in seconds */
    elapsedTime$: import("rxjs").Observable<number>;
    /** Remaining time of current session in seconds */
    remainingTime$: import("rxjs").Observable<number>;
    /** Recording state (`0` or `1`) */
    recording$: import("rxjs").Observable<number>;
    /** Recording busy state (`0` or `1`) */
    busy$: import("rxjs").Observable<number>;
    /** Recording time in seconds */
    recordingTime$: import("rxjs").Observable<number>;
    /** Soundcheck activation state (`0` or `1`) */
    soundcheck$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore);
    /** Start the player */
    play(): void;
    /** Pause the player */
    pause(): void;
    /** Stop the player */
    stop(): void;
    /** Toggle recording */
    recordToggle(): void;
    /** Start recording */
    recordStart(): void;
    /** Stop recording */
    recordStop(): void;
    /**
     * Set soundcheck (activate or deactivate)
     * @param value `0` or `1`
     */
    setSoundcheck(value: number): void;
    /** Activate soundcheck */
    activateSoundcheck(): void;
    /** Deactivate soundcheck */
    deactivateSoundcheck(): void;
    /** Toggle soundcheck */
    toggleSoundcheck(): void;
}
