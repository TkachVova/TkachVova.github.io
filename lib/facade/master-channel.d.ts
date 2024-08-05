import { MixerConnection } from '../mixer-connection';
import { MixerStore } from '../state/mixer-store';
import { ChannelType } from '../types';
import { Channel } from './channel';
import { PannableChannel } from './interfaces';
import { AutomixGroupId } from './automix-controller';
/**
 * Represents a channel on the master bus
 */
export declare class MasterChannel extends Channel implements PannableChannel {
    private constructChannelId;
    fullChannelId: string;
    faderLevelCommand: string;
    /** SOLO value of the channel (`0` or `1`) */
    solo$: import("rxjs").Observable<number>;
    /** PAN value of the channel (between `0` and `1`) */
    pan$: import("rxjs").Observable<number>;
    /** Assigned automix group (`a`, `b`, `none`) */
    automixGroup$: import("rxjs").Observable<AutomixGroupId | "none">;
    /** Automix weight (linear) for this channel (between `0` and `1`) */
    automixWeight$: import("rxjs").Observable<number>;
    /** Automix weight (dB) for this channel (between `-12` and `12` dB) */
    automixWeightDB$: import("rxjs").Observable<number>;
    /** Multitrack selection state for the channel (`0` or `1`) */
    multiTrackSelected$: import("rxjs").Observable<number>;
    constructor(conn: MixerConnection, store: MixerStore, channelType: ChannelType, channel: number);
    /**
     * Set PAN value of the channel
     * @param value value between `0` and `1`
     */
    pan(value: number): void;
    /**
     * Set SOLO value for the channel
     * @param value SOLO value `0` or `1`
     */
    setSolo(value: number): void;
    /** Enable SOLO for the channel */
    solo(): void;
    /** Disable SOLO for the channel */
    unsolo(): void;
    /** Toggle SOLO status for the channel */
    toggleSolo(): void;
    private multiTrackAssertChannelType;
    private multiTrackSetSelection;
    /** Select this channel for multitrack recording */
    multiTrackSelect(): void;
    /** Remove this channel from multitrack recording */
    multiTrackUnselect(): void;
    /** Toggle multitrack recording for this channel */
    multiTrackToggle(): void;
    /** Assign this channel to an automix group. This also includes stereo-linked channels.
     * @param group `a` or `b` for automix groups. `none` to remove from all groups.
     */
    automixAssignGroup(group: AutomixGroupId | 'none'): void;
    /** Remove this channel from the automix group */
    automixRemove(): void;
    /**
     * Set automix weight (linear) for the channel
     * @param value value between `0` and `1`
     */
    automixSetWeight(value: number): void;
    /**
     * Set automix weight (dB) for the channel
     * @param value value between `-12` and `12`
     */
    automixSetWeightDB(dbValue: number): void;
    /**
     * Change the automix weight relatively by adding a given value
     * @param offsetDB value (dB) to add to the current value
     */
    automixChangeWeightDB(offsetDB: number): void;
}
