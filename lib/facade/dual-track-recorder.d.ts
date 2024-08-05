import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
/**
 * Represents the 2-track recorder in the media player
 */
export declare class DualTrackRecorder {
    private conn;
    private store;
    /** Recording state (`0` or `1`) */
    recording$: import("rxjs").Observable<number>;
    /** Recording busy state (`0` or `1`) */
    busy$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore);
    /** Toggle recording */
    recordToggle(): void;
    /** Start recording */
    recordStart(): void;
    /** Stop recording */
    recordStop(): void;
}
