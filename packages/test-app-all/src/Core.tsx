import { Moralis } from '@moralis/all';
import Core from '@moralis/core';
import Server from '@moralis/server';
import EvmApi from '@moralis/evm-api'
import Evm from '@moralis/evm';


export const Core1 = () => {
  
      const removeModule = (module: string) => {
        if(module === 'Evm')
          Moralis.Core.modules.remove('evm')
        if(module === 'Server')
          Moralis.Core.modules.remove('server')
        const list = Moralis.Core.modules.list()
        if(module === 'EmvApi')
          Moralis.Core.modules.remove('emvApi')
        console.log("after removing:",typeof(list))
      }
        
    const registerModule = (module: string) => {
        if(module === 'Evm')
          Core.registerModules([Evm]);
        if(module === 'Server')
          Core.registerModules([Server]);
        if(module === 'EmvApi')
          Core.registerModules([EvmApi]);
        const list = Moralis.Core.modules.list()
        console.log("after registering:",list)
      }

  return (
    <div>
      <h2>Core</h2>

    <button onClick= {() => removeModule('Evm')}>Remove evm module</button>
    <button onClick= {() => removeModule('EvmApi')}>Remove evmApi module</button>
    <button onClick= {() => removeModule('Server')}>Remove server module</button>
      
    <button onClick={() => registerModule('Evm')}>Register evm module</button>
    <button onClick={() => registerModule('EvmApi')}>Register evmApi module</button>
    <button onClick={() => registerModule('Server')}>Register server module</button>

    </div>
  );
};