import { ConnectionEvent, ConnectionStatus } from './types';
export declare class MixerConnection {
    private targetIP;
    /** time to wait before reconnecting after an error */
    private reconnectTime;
    /** period time for the keepalive interval messages */
    private keepaliveTime;
    private socket$;
    /**
     * closing the socket is not enough to finally end the connection.
     * socket$.complete() only works if the socket is open.
     * However, if there's a timed reconnect running, it will try to reconnect.
     * socket$.complete() will have no effect.
     * We have a separate notifier here to destroy the timed reconnect when the user actually wants to close everything
     */
    private forceClose$;
    /**
     * internal message streams.
     * can be fed from anywhere inside this class
     * but must not be exposed
     */
    private statusSubject$;
    private outboundSubject$;
    private inboundSubject$;
    private _status;
    /** public message streams */
    /** Connection status stream */
    status$: import("rxjs").Observable<ConnectionEvent>;
    /** Connection status */
    get status(): ConnectionStatus;
    /** All outbound messages (from client to mixer) */
    outbound$: import("rxjs").Observable<string>;
    /** All inbound messages (from mixer to client) */
    inbound$: import("rxjs").Observable<string>;
    /** combined stream of inbound and outbound messages */
    allMessages$: import("rxjs").Observable<string>;
    constructor(targetIP: string);
    /** Connect to socket and retry if connection lost */
    connect(): Promise<void>;
    /** Disconnect from socket */
    disconnect(): Promise<void>;
    /**
     * Reconnect to the mixer:
     * disconnect, then wait 1 second before connecting again
     */
    reconnect(): Promise<void>;
    /**
     * Send command to the mixer
     * @param msg Message to send
     */
    sendMessage(msg: string): void;
}
