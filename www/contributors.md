You can get an overview of the different contributors all of our git repos on github ([champ](https://github.com/pognetwork/champ/graphs/contributors), [catjam](https://github.com/pognetwork/catjam/graphs/contributors), [specification](https://github.com/pognetwork/specification/graphs/contributors)). In the following document, we want to give more in depth overview about who contributed what parts to the project:

**_NOTE_: This document is still a work in progress, feel free to add more information about your contributions to this project! This can also include small tasks specific to a university module.**

<!-- prettier-ignore -->
!!! info "Henry Gressmann ([@explodingcamera](https://github.com/explodingcamera))"
    * [Champ:](https://github.com/pognetwork/champ)
        * Rust Project architecture
        * Documentation Overview & Architecture Diagram
        * Block processing module
        * Wallet Format & rust + wasm library generation/decryption/encryption
        * Pluggable Storage Service (Using `sled` as our main database)
        * gRPC Authentication & Access controll (Pair-Programming with Alexander Gemmingen)
        * Crypto module (Pair-Programming with Alexander Gemmingen)
    * [Catjam:](https://github.com/pognetwork/catjam)
        * Web Project architecture
        * Wallet & Admin Panel Design
    * [pog.network:](https://github.com/pognetwork/pog.network)
        * Website design & content
        * First specification draft (Pair-Programming with Alexander Gemmingen)
        * Champ documentation (Pair-Programming with Alexander Gemmingen)
    * [Continous Integration Pipeline:](https://github.com/pognetwork/champ/search?q=ci&type=commits)

<!-- prettier-ignore -->
!!! info "Alexander Gemmingen ([@Alyks1](https://github.com/Alyks1))"
    * [Champ:](https://github.com/pognetwork/champ)
        * Designed Protobuf data
        * gRPC server endpoints
        * gRPC Authentication & Access controll (Pair-Programming with Henry Gressmann)
        * Designed graphs & calculations for the consensus algorithm
        * Node admin CLI
        * Block validation logic
        * Crypto module (Pair-Programming with Henry Gressmann)
    * [pog.network:](https://github.com/pognetwork/pog.network)
        * Designed project specification (Pair-Programming with Henry Gressmann)
        * Champ documentation (Pair-Programming with Henry Gressmann)
