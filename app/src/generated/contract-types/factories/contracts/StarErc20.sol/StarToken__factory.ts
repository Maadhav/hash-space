/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StarToken,
  StarTokenInterface,
} from "../../../contracts/StarErc20.sol/StarToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "issueToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600a81526020017f5374617220546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f53545200000000000000000000000000000000000000000000000000000000008152508160039080519060200190620000969291906200040f565b508060049080519060200190620000af9291906200040f565b505050620000d2620000c6620000e860201b60201c565b620000f060201b60201c565b620000e2620001b660201b60201c565b620006dd565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b620001c6620000e860201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001ec6200026260201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000245576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200023c906200051e565b60405180910390fd5b6200026033683635c9adc5dea000006200028c60201b60201c565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002ff576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002f69062000540565b60405180910390fd5b62000313600083836200040560201b60201c565b806002600082825462000327919062000590565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200037e919062000590565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620003e5919062000562565b60405180910390a362000401600083836200040a60201b60201c565b5050565b505050565b505050565b8280546200041d90620005f7565b90600052602060002090601f0160209004810192826200044157600085556200048d565b82601f106200045c57805160ff19168380011785556200048d565b828001600101855582156200048d579182015b828111156200048c5782518255916020019190600101906200046f565b5b5090506200049c9190620004a0565b5090565b5b80821115620004bb576000816000905550600101620004a1565b5090565b6000620004ce6020836200057f565b9150620004db826200068b565b602082019050919050565b6000620004f5601f836200057f565b91506200050282620006b4565b602082019050919050565b6200051881620005ed565b82525050565b600060208201905081810360008301526200053981620004bf565b9050919050565b600060208201905081810360008301526200055b81620004e6565b9050919050565b60006020820190506200057960008301846200050d565b92915050565b600082825260208201905092915050565b60006200059d82620005ed565b9150620005aa83620005ed565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005e257620005e16200062d565b5b828201905092915050565b6000819050919050565b600060028204905060018216806200061057607f821691505b602082108114156200062757620006266200065c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6118e280620006ed6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610264578063a9059cbb14610294578063dd62ed3e146102c4578063f2fde38b146102f4576100f5565b8063715018a6146102145780638da5cb5b1461021e57806395d89b411461023c578063a1ee8c781461025a576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806370a08231146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610310565b60405161010f91906112a7565b60405180910390f35b610132600480360381019061012d9190611062565b6103a2565b60405161013f919061128c565b60405180910390f35b6101506103c5565b60405161015d9190611409565b60405180910390f35b610180600480360381019061017b9190611013565b6103cf565b60405161018d919061128c565b60405180910390f35b61019e6103fe565b6040516101ab9190611424565b60405180910390f35b6101ce60048036038101906101c99190611062565b610407565b6040516101db919061128c565b60405180910390f35b6101fe60048036038101906101f99190610fae565b61043e565b60405161020b9190611409565b60405180910390f35b61021c610486565b005b61022661050e565b6040516102339190611271565b60405180910390f35b610244610538565b60405161025191906112a7565b60405180910390f35b6102626105ca565b005b61027e60048036038101906102799190611062565b61065b565b60405161028b919061128c565b60405180910390f35b6102ae60048036038101906102a99190611062565b6106d2565b6040516102bb919061128c565b60405180910390f35b6102de60048036038101906102d99190610fd7565b6106f5565b6040516102eb9190611409565b60405180910390f35b61030e60048036038101906103099190610fae565b61077c565b005b60606003805461031f90611539565b80601f016020809104026020016040519081016040528092919081815260200182805461034b90611539565b80156103985780601f1061036d57610100808354040283529160200191610398565b820191906000526020600020905b81548152906001019060200180831161037b57829003601f168201915b5050505050905090565b6000806103ad610874565b90506103ba81858561087c565b600191505092915050565b6000600254905090565b6000806103da610874565b90506103e7858285610a47565b6103f2858585610ad3565b60019150509392505050565b60006012905090565b600080610412610874565b905061043381858561042485896106f5565b61042e919061145b565b61087c565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61048e610874565b73ffffffffffffffffffffffffffffffffffffffff166104ac61050e565b73ffffffffffffffffffffffffffffffffffffffff1614610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f990611369565b60405180910390fd5b61050c6000610d54565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606004805461054790611539565b80601f016020809104026020016040519081016040528092919081815260200182805461057390611539565b80156105c05780601f10610595576101008083540402835291602001916105c0565b820191906000526020600020905b8154815290600101906020018083116105a357829003601f168201915b5050505050905090565b6105d2610874565b73ffffffffffffffffffffffffffffffffffffffff166105f061050e565b73ffffffffffffffffffffffffffffffffffffffff1614610646576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063d90611369565b60405180910390fd5b61065933683635c9adc5dea00000610e1a565b565b600080610666610874565b9050600061067482866106f5565b9050838110156106b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b0906113c9565b60405180910390fd5b6106c6828686840361087c565b60019250505092915050565b6000806106dd610874565b90506106ea818585610ad3565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610784610874565b73ffffffffffffffffffffffffffffffffffffffff166107a261050e565b73ffffffffffffffffffffffffffffffffffffffff16146107f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107ef90611369565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610868576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085f906112e9565b60405180910390fd5b61087181610d54565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156108ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e3906113a9565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561095c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095390611309565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610a3a9190611409565b60405180910390a3505050565b6000610a5384846106f5565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610acd5781811015610abf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab690611329565b60405180910390fd5b610acc848484840361087c565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610b43576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b3a90611389565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610bb3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610baa906112c9565b60405180910390fd5b610bbe838383610f7a565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610c44576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3b90611349565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610cd7919061145b565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610d3b9190611409565b60405180910390a3610d4e848484610f7f565b50505050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610e8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e81906113e9565b60405180910390fd5b610e9660008383610f7a565b8060026000828254610ea8919061145b565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610efd919061145b565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f629190611409565b60405180910390a3610f7660008383610f7f565b5050565b505050565b505050565b600081359050610f938161187e565b92915050565b600081359050610fa881611895565b92915050565b600060208284031215610fc057600080fd5b6000610fce84828501610f84565b91505092915050565b60008060408385031215610fea57600080fd5b6000610ff885828601610f84565b925050602061100985828601610f84565b9150509250929050565b60008060006060848603121561102857600080fd5b600061103686828701610f84565b935050602061104786828701610f84565b925050604061105886828701610f99565b9150509250925092565b6000806040838503121561107557600080fd5b600061108385828601610f84565b925050602061109485828601610f99565b9150509250929050565b6110a7816114b1565b82525050565b6110b6816114c3565b82525050565b60006110c78261143f565b6110d1818561144a565b93506110e1818560208601611506565b6110ea816115c9565b840191505092915050565b600061110260238361144a565b915061110d826115da565b604082019050919050565b600061112560268361144a565b915061113082611629565b604082019050919050565b600061114860228361144a565b915061115382611678565b604082019050919050565b600061116b601d8361144a565b9150611176826116c7565b602082019050919050565b600061118e60268361144a565b9150611199826116f0565b604082019050919050565b60006111b160208361144a565b91506111bc8261173f565b602082019050919050565b60006111d460258361144a565b91506111df82611768565b604082019050919050565b60006111f760248361144a565b9150611202826117b7565b604082019050919050565b600061121a60258361144a565b915061122582611806565b604082019050919050565b600061123d601f8361144a565b915061124882611855565b602082019050919050565b61125c816114ef565b82525050565b61126b816114f9565b82525050565b6000602082019050611286600083018461109e565b92915050565b60006020820190506112a160008301846110ad565b92915050565b600060208201905081810360008301526112c181846110bc565b905092915050565b600060208201905081810360008301526112e2816110f5565b9050919050565b6000602082019050818103600083015261130281611118565b9050919050565b600060208201905081810360008301526113228161113b565b9050919050565b600060208201905081810360008301526113428161115e565b9050919050565b6000602082019050818103600083015261136281611181565b9050919050565b60006020820190508181036000830152611382816111a4565b9050919050565b600060208201905081810360008301526113a2816111c7565b9050919050565b600060208201905081810360008301526113c2816111ea565b9050919050565b600060208201905081810360008301526113e28161120d565b9050919050565b6000602082019050818103600083015261140281611230565b9050919050565b600060208201905061141e6000830184611253565b92915050565b60006020820190506114396000830184611262565b92915050565b600081519050919050565b600082825260208201905092915050565b6000611466826114ef565b9150611471836114ef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156114a6576114a561156b565b5b828201905092915050565b60006114bc826114cf565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611524578082015181840152602081019050611509565b83811115611533576000848401525b50505050565b6000600282049050600182168061155157607f821691505b602082108114156115655761156461159a565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611887816114b1565b811461189257600080fd5b50565b61189e816114ef565b81146118a957600080fd5b5056fea2646970667358221220844728ce130e57858ffff20583c58f5e68289a62caa296fc28f7cec43609a74764736f6c63430008040033";

type StarTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StarTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StarToken__factory extends ContractFactory {
  constructor(...args: StarTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StarToken> {
    return super.deploy(overrides || {}) as Promise<StarToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StarToken {
    return super.attach(address) as StarToken;
  }
  override connect(signer: Signer): StarToken__factory {
    return super.connect(signer) as StarToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StarTokenInterface {
    return new utils.Interface(_abi) as StarTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StarToken {
    return new Contract(address, _abi, signerOrProvider) as StarToken;
  }
}
