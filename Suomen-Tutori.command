#!/bin/bash
# Suomen Tutori - Tuteur de Finnois
# Double-clique sur ce fichier pour lancer l'application

cd ~/Projects/tuteur-finnois/app

echo "================================================"
echo "   Suomen Tutori - Demarrage en cours..."
echo "================================================"
echo ""

# Verifier si node est installe
if ! command -v node &> /dev/null; then
    echo "ERREUR: Node.js n'est pas installe."
    echo "Installe-le depuis https://nodejs.org"
    read -p "Appuie sur Entree pour fermer..."
    exit 1
fi

# Verifier si les dependances sont installees
if [ ! -d "node_modules" ]; then
    echo "Installation des dependances..."
    npm install
fi

echo "L'application demarre..."
echo "Ouvre ton navigateur a: http://localhost:5173"
echo ""
echo "(Appuie sur Ctrl+C pour arreter le serveur)"
echo ""

# Ouvrir le navigateur apres 2 secondes
(sleep 2 && open http://localhost:5173) &

# Lancer le serveur
npm run dev
