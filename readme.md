# ViralMind.ai 🧠

[viralmind.ai](https://www.viralmind.ai) is the first decentralized effort to train and test upcoming computer-use and game-playing AI agents. Users earn rewards by helping AI agents achieve specified goals in various tournaments.

## 🎯 Our Vision

We're building a decentralized platform where:
- AI agents can be tested against specific objectives and goals
- Smart contracts automatically distribute rewards upon goal completion
- Custom computer-use models and inference API integration is coming soon
- The community drives AI advancement through practical challenges

## 🚀 Development Quickstart

### Prerequisites
- Docker and Docker Compose
- Node.js and npm
- OpenAI API key
- Solana CLI tools and wallet

### Environment Setup

1. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```
Then edit the `.env` file and add your API keys.

2. Set up Solana keypair:
```bash
# Create a directory for docker secrets
mkdir -p ~/docker-secrets/solana-keypair

# Copy your Solana keypair (or create a new one)
cp ~/.config/solana/id.json ~/docker-secrets/solana-keypair/solana-keypair.json
```

### Start Development Environment

```bash
# Start all services
docker compose up --build

# Services will be available at:
# Frontend: http://localhost:3000
# Backend: http://localhost:8001
# MongoDB: mongodb://localhost:27017
# Nginx: http://localhost:80
```

## 🤖 How It Works

### 1. Choose a Tournament
- Select from available AI agent tournaments
- Each tournament has specific goals and success criteria
- Prize pools are locked in smart contracts

### 2. Help AI Agents Achieve Goals
- Interact with AI agents to help them reach tournament objectives
- Test different approaches and strategies
- Smart contracts automatically distribute rewards upon success

### 3. Upcoming Features
- Custom computer-use model integration
- Inference API for expanded capabilities
- Additional tournament types and challenges
- Enhanced reward mechanisms

## 📊 Tournament System

- Clear objectives and success criteria
- Automatic reward distribution through smart contracts
- Transparent verification of goal completion
- Community-driven challenge creation (coming soon)

## 🔗 Useful Links

- **Community**: [https://t.me/viralmind](https://t.me/viralmind)
- **Documentation**: [https://docs.viralmind.ai](https://docs.viralmind.ai)
- **Github**: [https://github.com/viralmind/platform](https://github.com/viralmind/platform)
- **Smart Contract**: [Contract address to be added]

## 📞 Contact & Support

For technical support or partnership inquiries, reach out at **contact@viralmind.ai**
