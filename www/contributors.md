You can get an overview of the different contributors all of our git repos on github ([champ](https://github.com/pognetwork/champ/graphs/contributors), [catjam](https://github.com/pognetwork/catjam/graphs/contributors), [specification](https://github.com/pognetwork/specification/graphs/contributors)). In the following document, we want to give more in depth overview about who contributed what parts to the project:

**_NOTE_: This document is still a work in progress, feel free to add more information about your contributions to this project! This can also include small tasks specific to a university module.**

<!-- prettier-ignore -->
!!! info "Henry Gressmann ([@explodingcamera](https://github.com/explodingcamera))"
    * [Champ (Backend):](https://github.com/pognetwork/champ)
        * Rust Project architecture [[1]](https://github.com/pognetwork/champ/commits/main?after=1470add68e748fd46f9479cfe0e3f1445d19fb95+69&branch=main) [[2]](https://github.com/pognetwork/champ/pull/1)
        * Documentation Overview & Architecture Diagram [[1]](https://github.com/pognetwork/champ/blame/main/docs/developers/overview.md)
        * Block processing module [[1]](https://github.com/pognetwork/champ/tree/main/champ/node/blockpool) [[2]](https://github.com/pognetwork/champ/pull/65)
        * Wallet Format & rust + wasm library generation/decryption/encryption [[1]](https://github.com/pognetwork/champ/tree/main/champ/lib/champ-wasm) [[2]](https://github.com/pognetwork/champ/tree/main/champ/lib/lulw) [[2]](https://github.com/pognetwork/champ/pull/84)
        * Pluggable Storage Service (Using `sled` as our main database) and all database code [[1]](https://github.com/pognetwork/champ/tree/main/champ/node/storage) [[2]](https://github.com/pognetwork/champ/pull/77) [[3]](https://github.com/pognetwork/champ/pull/68)
        * gRPC Authentication & Access control (Pair-Programming with Alexander Gemmingen) [[1]](https://github.com/pognetwork/champ/pull/80) [[2]](https://github.com/pognetwork/champ/pull/66)
        * Crypto module (Pair-Programming with Alexander Gemmingen) [[1]](https://github.com/pognetwork/champ/pull/84) [[2]](https://github.com/pognetwork/champ/pull/29)
        * Config Managment [[1]](https://github.com/pognetwork/champ/pull/64)
        * Tracing and Debug logging (Pair-Programming with Alexander Gemmingen) [[1]](https://github.com/pognetwork/champ/pull/86)
    * [Catjam (Frontend):](https://github.com/pognetwork/catjam)
        * Web Project architecture
        * [Wallet](https://wallet.pog.network) & Admin Panel Design
    * [proto:](https://github.com/pognetwork/proto)
        * Initial Setup
        * API Types (Pair-Programming with Alexander Gemmingen)
        * Rust Client + Server Crate
        * Typescript/Javascript module & automated publishing
    * [pog.network:](https://github.com/pognetwork/pog.network)
        * Website design & content
        * First specification draft (Pair-Programming with Alexander Gemmingen)
        * Champ documentation (Pair-Programming with Alexander Gemmingen)
    * [Continous Integration Pipeline:](https://github.com/pognetwork/champ/search?q=ci&type=commits)
        * [Continous Integration Pipeline](https://github.com/pognetwork/champ/tree/main/.github/workflows)
        * Automated Canary Builds & Deployment (On my homeserver @ `pog-canary.explodingcamera.com`)

<!-- prettier-ignore -->
!!! info "Alexander Gemmingen ([@Alyks1](https://github.com/Alyks1))"
    * [Champ (Backend):](https://github.com/pognetwork/champ)
        * gRPC server endpoints [[1]](https://github.com/pognetwork/champ/pull/69) [[2]](https://github.com/pognetwork/champ/pull/67) [[3]](https://github.com/pognetwork/champ/pull/33)
        * gRPC Authentication & Access controll (Pair-Programming with Henry Gressmann) [[1]](https://github.com/pognetwork/champ/pull/66) [[2]](https://github.com/pognetwork/champ/pull/80)
        * Designed graphs & calculations for the consensus algorithm [[1]](https://github.com/pognetwork/champ/pull/22)
        * Node admin CLI
        * Block validation logic [[1]](https://github.com/pognetwork/champ/pull/58) [[2]](https://github.com/pognetwork/champ/pull/59)
        * Crypto module (Pair-Programming with Henry Gressmann) [[1]](https://github.com/pognetwork/champ/pull/28)
        * Tracing and Debug logging (Pair-Programming with Henry Gressmann) [[1]](https://github.com/pognetwork/champ/pull/86)
        * Have I been pwned Password Check [[1]](https://github.com/pognetwork/champ/pull/87)
    * [proto:](https://github.com/pognetwork/proto)
        * gRPC message and function declaration
        * API Types (Pair-Programming with Henry Gressmann)
    * [pog.network:](https://github.com/pognetwork/pog.network)
        * Designed project specification (Pair-Programming with Henry Gressmann)
        * Champ documentation (Pair-Programming with Henry Gressmann)
