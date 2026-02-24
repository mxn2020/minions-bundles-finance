# Minions Bundle: Finance

Financial tracking bundle — budgets, expenses, invoices

This is a Minions ecosystem **bundle**. Bundles are curated assemblies of MinionTypes, relations, and views designed for a specific domain.

## Installation

\`\`\`bash
npm install minions-bundles-finance
# or
pnpm add minions-bundles-finance
# or
yarn add minions-bundles-finance
\`\`\`

## Usage

\`\`\`typescript
import { bundleTypes, bundleRelations, bundleViews } from 'minions-bundles-finance';
import { Minions } from 'minions-sdk';

// Initialize a client with this bundle's types and relations
const core = new Minions();

for (const type of bundleTypes) {
    core.registry.register(type);
}

// Ensure relations exist
for (const rel of bundleRelations) {
    // Implement relation registration logic here if applicable
}
\`\`\`

## AI Agent Skills

See [SKILLS.md](./SKILLS.md) for instructions on how AI agents should interact with this bundle's schema.

## License

MIT - Copyright (c) 2026 Mehdi Nabhani
