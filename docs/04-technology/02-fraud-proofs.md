# Fraud Proofs

Fraud Proof is the most critical part of the Layer2 project to ensure security. Only when fraud-proof is implemented, and fraud on Layer2 can be punished at the arbitration layer, we can guarantee the security of users' assets.

![modular](/diagram/rooch-omo.svg)

Rooch provides interactive on-chain Arbitration based on [OMO](https://github.com/rooch-network/omo).

1. the challenger and defender of the interactive proof of fraud interact to find the divergent instructions of the OMO MIPS.
2. The divergent instructions are simulated in an arbitration contract on the chain. The on-chain arbitration contract can be implemented with any Turing-complete smart contract, such as `MIPS.move` and `MIPS.sol` in the diagram above.

Also, Rooch is working with [zkMove](https://github.com/young-rocks/zkmove) to support interactive and zero-knowledge combination proof schemes in the future.


## OMO

OMO is a general bytecode emulator with per-step state proof:

1. Design for multi-chain VM execution: rich implementation of instructions and system calls
2. CPU & OS interface for multi-platform supports.
3. Clear and accurate per-step state proof general solution: instruction-level process state 

## Interactive Arbitration

Assume that a block takes `N` steps to execute. The challenger and defender first provide proof of their respective states after the final execution (i.e., step `N`), and if the judge finds that the results are inconsistent, it can ask both sides to provide proof of the state of step `N/2` again.
If the results are consistent at this point, the disagreement is between steps `N/2` and `N`, and the judge may ask the parties to provide evidence of step `(N/2 + N) / 2`.

If the results are inconsistent, the disagreement is between step `0` and step `N/2`, and the judge can take evidence from both sides for step `(N/2) / 2`.
With this multiple rounds of interaction, the judge keeps comparing the evidence submitted by both sides until he finds a step (say `m`) where the evidence of the two sides diverges (the intermediate states of the two sides prove inconsistent).

At this point, the challenger and defender have already agreed on the intermediate state proof of the previous step (`m-1`), and the judge only needs to perform the `m` step based on the state of the `m-1` step, and then compare the generated state proof with the proofs provided by the challenger and defender to determine which side has submitted the right evidence.

[learn more about OMO](https://github.com/rooch-network/omo/blob/main/docs/guidelines.md)

