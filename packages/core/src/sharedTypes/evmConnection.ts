/**
 * Type definitions that are used in multiple packages
 * // TODO: consider moving this to a separate types package
 */

import { EvmAddress, EvmChain } from '..';
import { InputChainId } from '../dataTypes/EvmChain';
import { EvmProvider } from './EvmProvider';

// Evm connections
export type EvmBaseConnectOptions = Record<string, unknown>;
export type SolBaseConnectOptions = Record<string, unknown>;

export type EvmConnect = {
  (wallet: 'metamask', options?: EvmMetamaskConnectorConnectOptions): Promise<EvmConnectData>;
  (wallet: 'walletconnect', options?: EvmWalletConnectConnectorOptions): Promise<EvmConnectData>;
  (wallet: string, options?: EvmBaseConnectOptions): Promise<EvmConnectData>;
};

export type SolConnect = {
  (wallet: 'phantom', options?: SolPhantomConnectorConnectOptions): Promise<EvmConnectData>;
  (wallet: string, options?: EvmBaseConnectOptions): Promise<EvmConnectData>;
};

export interface SolPhantomConnectorConnectOptions extends SolBaseConnectOptions {
  // TODO: implement
  debug: true;
}

export interface EvmMetamaskConnectorConnectOptions extends EvmBaseConnectOptions {
  // Whether error messages should be logged to the console. Does not affect errors thrown due to invalid options
  silent?: boolean;
  // How many milliseconds to wait for asynchronously injected providers
  timeout?: number;
}

export interface EvmWalletConnectConnectorOptions extends EvmBaseConnectOptions {
  // Prefered chainId, if supported by the wallet
  chainId?: InputChainId;
  // List of mobile links
  mobileLinks?: string[];
  // Weather to reuse the same session (if available), or to force a new session
  newSession?: boolean;
}

export type AnyConnector = any;

export interface EvmConnectResponse {
  provider: EvmProvider;
  chain: EvmChain | null;
  account: EvmAddress | null;
}

export interface EvmConnectData<Connector extends AnyConnector = AnyConnector> extends EvmConnectResponse {
  wallet: Connector;
}