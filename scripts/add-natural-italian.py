#!/usr/bin/env python3
"""
Add Italian translations to all `natural` dialogue blocks in school palace files.
"""

import re
import json
from pathlib import Path

ROOT = Path(__file__).parent.parent
SCHOOL_DIR = ROOT / "src" / "data" / "school"

# Mapping of (file_stem, dialogue_id, turn_index) -> Italian translation
# Or simpler: exact English natural text -> Italian text
TRANSLATIONS = {
    # ========== classroom.ts ==========
    # desk-no-pencil
    ("classroom", "desk-no-pencil", 0): "Ho dimenticato la matita.",
    ("classroom", "desk-no-pencil", 1): "Ecco, prendi una.",
    ("classroom", "desk-no-pencil", 2): "Grazie!",
    # desk-can-i-use
    ("classroom", "desk-can-i-use", 0): "Mi presti le forbici?",
    ("classroom", "desk-can-i-use", 1): "Sì. Attento.",
    # desk-sharing-glue
    ("classroom", "desk-sharing-glue", 0): "Mi passi la colla?",
    ("classroom", "desk-sharing-glue", 1): "Ecco.",
    ("classroom", "desk-sharing-glue", 2): "Grazie!",
    # teacher-sit-down
    ("classroom", "teacher-sit-down", 0): "Bene, sedetevi tutti.",
    ("classroom", "teacher-sit-down", 1): "Tirate fuori i libri.",
    ("classroom", "teacher-sit-down", 2): "A che pagina?",
    ("classroom", "teacher-sit-down", 3): "Pagina dieci.",
    # teacher-raise-hand
    ("classroom", "teacher-raise-hand", 0): "Mani su se avete bisogno.",
    ("classroom", "teacher-raise-hand", 1): "Signorina, posso andare in bagno?",
    ("classroom", "teacher-raise-hand", 2): "Sì, ma sbrigati.",
    # teacher-look-at-board
    ("classroom", "teacher-look-at-board", 0): "Guardate la lavagna.",
    ("classroom", "teacher-look-at-board", 1): "Non vedo.",
    ("classroom", "teacher-look-at-board", 2): "Avvicina la sedia allora.",
    # walls-late-arrival
    ("classroom", "walls-late-arrival", 0): "Scusi il ritardo.",
    ("classroom", "walls-late-arrival", 1): "Siediti. Piano.",
    # walls-leaving
    ("classroom", "walls-leaving", 0): "Tutti in fila.",
    ("classroom", "walls-leaving", 1): "Dove andiamo?",
    ("classroom", "walls-leaving", 2): "Andiamo in cortile.",
    # read-choose-book
    ("classroom", "read-choose-book", 0): "Posso prendere questo?",
    ("classroom", "read-choose-book", 1): "Sì. Rimettilo dopo.",
    # group-work-together
    ("classroom", "group-work-together", 0): "Formate i gruppi.",
    ("classroom", "group-work-together", 1): "Cosa dobbiamo fare?",
    ("classroom", "group-work-together", 2): "Facciamo un poster.",

    # ========== gym.ts ==========
    # gym-line-up
    ("gym", "gym-line-up", 0): "Tutti in fila.",
    ("gym", "gym-line-up", 1): "Tempo di riscaldamento.",
    ("gym", "gym-line-up", 2): "A cosa giochiamo?",
    ("gym", "gym-line-up", 3): "A calcio.",
    # gym-teams
    ("gym", "gym-teams", 0): "Posso stare nella tua squadra?",
    ("gym", "gym-teams", 1): "Sì. Ci manca uno.",
    ("gym", "gym-teams", 2): "Anche io voglio giocare.",
    # gym-hurt
    ("gym", "gym-hurt", 0): "Mi sono fatto male alla gamba.",
    ("gym", "gym-hurt", 1): "Siediti. Riposa.",
    ("gym", "gym-hurt", 2): "Posso giocare lo stesso?",
    ("gym", "gym-hurt", 3): "Non oggi.",
    # gym-win
    ("gym", "gym-win", 0): "Abbiamo vinto!",
    ("gym", "gym-win", 1): "Bella partita!",
    ("gym", "gym-win", 2): "Hai giocato bene.",
    # gym-fair
    ("gym", "gym-fair", 0): "Non è giusto.",
    ("gym", "gym-fair", 1): "Cosa è successo?",
    ("gym", "gym-fair", 2): "Mi ha spinto.",
    ("gym", "gym-fair", 3): "Niente spintoni.",
    # gym-shower
    ("gym", "gym-shower", 0): "Ginnastica finita.",
    ("gym", "gym-shower", 1): "Ho caldo.",
    ("gym", "gym-shower", 2): "Bevi un po' d'acqua.",

    # ========== hallway-locker.ts ==========
    # hl-line-up
    ("hallway-locker", "hl-line-up", 0): "Tutti in fila.",
    ("hallway-locker", "hl-line-up", 1): "Dove andiamo?",
    ("hallway-locker", "hl-line-up", 2): "In classe.",
    # hl-lost
    ("hallway-locker", "hl-lost", 0): "Dov'è la mia classe?",
    ("hallway-locker", "hl-lost", 1): "A sinistra. Poi a destra.",
    ("hallway-locker", "hl-lost", 2): "Grazie.",
    # hl-locker
    ("hallway-locker", "hl-locker", 0): "È il tuo armadietto?",
    ("hallway-locker", "hl-locker", 1): "Sì. Ecco il mio nome.",
    ("hallway-locker", "hl-locker", 2): "Scusa. Errore mio.",
    # hl-no-running
    ("hallway-locker", "hl-no-running", 0): "Non correre.",
    ("hallway-locker", "hl-no-running", 1): "Scusa.",
    ("hallway-locker", "hl-no-running", 2): "Cammina.",
    # hl-be-quiet
    ("hallway-locker", "hl-be-quiet", 0): "Silenzio nel corridoio.",
    ("hallway-locker", "hl-be-quiet", 1): "Okay. Scusa.",
    # hl-follow
    ("hallway-locker", "hl-follow", 0): "Seguitemi.",
    ("hallway-locker", "hl-follow", 1): "Dove andiamo?",
    ("hallway-locker", "hl-follow", 2): "In cortile.",
    # hl-stairs
    ("hallway-locker", "hl-stairs", 0): "Su per le scale.",
    ("hallway-locker", "hl-stairs", 1): "Quale piano?",
    ("hallway-locker", "hl-stairs", 2): "Primo piano.",
    # hl-exit
    ("hallway-locker", "hl-exit", 0): "Dov'è l'uscita?",
    ("hallway-locker", "hl-exit", 1): "Dritto. Poi sinistra.",
    ("hallway-locker", "hl-exit", 2): "Grazie.",

    # ========== lunch-hall.ts ==========
    # lunch-what-do-you-have
    ("lunch-hall", "lunch-what-do-you-have", 0): "Cosa hai per pranzo?",
    ("lunch-hall", "lunch-what-do-you-have", 1): "Panino e mela.",
    ("lunch-hall", "lunch-what-do-you-have", 2): "Bene. Io ho la pasta.",
    # lunch-can-i-sit
    ("lunch-hall", "lunch-can-i-sit", 0): "Posso sedermi qui?",
    ("lunch-hall", "lunch-can-i-sit", 1): "Sì, siediti.",
    ("lunch-hall", "lunch-can-i-sit", 2): "Grazie.",
    # lunch-sharing-food
    ("lunch-hall", "lunch-sharing-food", 0): "Vuoi le patatine?",
    ("lunch-hall", "lunch-sharing-food", 1): "Sì, grazie.",
    ("lunch-hall", "lunch-sharing-food", 2): "Ecco.",
    ("lunch-hall", "lunch-sharing-food", 3): "Grazie!",
    # lunch-hungry
    ("lunch-hall", "lunch-hungry", 0): "Ho una fame da lupo.",
    ("lunch-hall", "lunch-hungry", 1): "Mangia il tuo pranzo.",
    ("lunch-hall", "lunch-hungry", 2): "Non mi piace.",
    ("lunch-hall", "lunch-hungry", 3): "Assaggia un po'.",
    # lunch-thirsty
    ("lunch-hall", "lunch-thirsty", 0): "Ho tanta sete.",
    ("lunch-hall", "lunch-thirsty", 1): "Bevi un po' d'acqua.",
    ("lunch-hall", "lunch-thirsty", 2): "Posso avere il succo?",
    ("lunch-hall", "lunch-thirsty", 3): "Dopo l'acqua.",
    # lunch-finished
    ("lunch-hall", "lunch-finished", 0): "Ho finito.",
    ("lunch-hall", "lunch-finished", 1): "Era buono?",
    ("lunch-hall", "lunch-finished", 2): "Sì, era buono.",
    ("lunch-hall", "lunch-finished", 3): "Lavati le mani.",
    # lunch-queue
    ("lunch-hall", "lunch-queue", 0): "Fate la fila.",
    ("lunch-hall", "lunch-queue", 1): "Voglio la pizza.",
    ("lunch-hall", "lunch-queue", 2): "Aspetta il tuo turno.",
    # lunch-allergies
    ("lunch-hall", "lunch-allergies", 0): "Non posso mangiare le noci.",
    ("lunch-hall", "lunch-allergies", 1): "Grazie per avermelo detto.",
    ("lunch-hall", "lunch-allergies", 2): "Ecco, questo è diverso.",
    ("lunch-hall", "lunch-allergies", 3): "Grazie.",

    # ========== playground.ts ==========
    # play-want-swing
    ("playground", "play-want-swing", 0): "Posso andare sull'altalena?",
    ("playground", "play-want-swing", 1): "Sì, un secondo.",
    ("playground", "play-want-swing", 2): "Grazie.",
    # play-fell-down
    ("playground", "play-fell-down", 0): "Sono caduto!",
    ("playground", "play-fell-down", 1): "Stai bene?",
    ("playground", "play-fell-down", 2): "Mi fa male il ginocchio!",
    ("playground", "play-fell-down", 3): "Chiamo la maestra.",
    # play-want-to-play
    ("playground", "play-want-to-play", 0): "Posso giocare?",
    ("playground", "play-want-to-play", 1): "Sì, vieni!",
    ("playground", "play-want-to-play", 2): "A cosa giochiamo?",
    ("playground", "play-want-to-play", 3): "A acchiapparello.",
    # play-sharing
    ("playground", "play-sharing", 0): "Posso giocare con la palla?",
    ("playground", "play-sharing", 1): "Sì, condividiamola.",
    ("playground", "play-sharing", 2): "Tocca a te.",
    # play-hurt
    ("playground", "play-hurt", 0): "Maestra, mi sono fatto male al braccio!",
    ("playground", "play-hurt", 1): "Fammi vedere.",
    ("playground", "play-hurt", 2): "Hai bisogno di un cerotto.",
    # play-time-to-go
    ("playground", "play-time-to-go", 0): "Tutti dentro.",
    ("playground", "play-time-to-go", 1): "Dobbiamo proprio?",
    ("playground", "play-time-to-go", 2): "Sì, è ora di pranzo.",
    # play-lonely
    ("playground", "play-lonely", 0): "Nessuno vuole giocare con me.",
    ("playground", "play-lonely", 1): "Io gioco con te.",
    ("playground", "play-lonely", 2): "Grazie. Sei il mio migliore amico.",
    # play-bathroom
    ("playground", "play-bathroom", 0): "Devo andare in bagno.",
    ("playground", "play-bathroom", 1): "Vai veloce. Torna subito.",

    # ========== school-bathroom.ts ==========
    # sb-can-i-go
    ("school-bathroom", "sb-can-i-go", 0): "Posso andare in bagno?",
    ("school-bathroom", "sb-can-i-go", 1): "Sì, ma sbrigati.",
    ("school-bathroom", "sb-can-i-go", 2): "Grazie.",
    # sb-wash-hands
    ("school-bathroom", "sb-wash-hands", 0): "Lavati le mani.",
    ("school-bathroom", "sb-wash-hands", 1): "Okay.",
    ("school-bathroom", "sb-wash-hands", 2): "Usa il sapone.",
    # sb-no-paper
    ("school-bathroom", "sb-no-paper", 0): "Non c'è carta.",
    ("school-bathroom", "sb-no-paper", 1): "Ne prendo un po'.",
    ("school-bathroom", "sb-no-paper", 2): "Grazie.",
    # sb-hurry
    ("school-bathroom", "sb-hurry", 0): "Sbrigati.",
    ("school-bathroom", "sb-hurry", 1): "Arrivo.",
    # sb-queue
    ("school-bathroom", "sb-queue", 0): "Aspetta il tuo turno.",
    ("school-bathroom", "sb-queue", 1): "Okay. Scusa.",
    # sb-dry-hands
    ("school-bathroom", "sb-dry-hands", 0): "Ho le mani bagnate.",
    ("school-bathroom", "sb-dry-hands", 1): "Usa l'asciugamano.",
    ("school-bathroom", "sb-dry-hands", 2): "Grazie.",

    # ========== school-bus.ts ==========
    # bus-get-on
    ("school-bus", "bus-get-on", 0): "Buongiorno.",
    ("school-bus", "bus-get-on", 1): "Buongiorno. Ecco il mio abbonamento.",
    ("school-bus", "bus-get-on", 2): "Siediti.",
    # bus-queue
    ("school-bus", "bus-queue", 0): "In fila. Aspettate qui.",
    ("school-bus", "bus-queue", 1): "È il nostro autobus?",
    ("school-bus", "bus-queue", 2): "Sì. Il numero dieci.",
    # bus-hold-on
    ("school-bus", "bus-hold-on", 0): "Non ci sono più posti.",
    ("school-bus", "bus-hold-on", 1): "Tieniti forte.",
    ("school-bus", "bus-hold-on", 2): "Mi tengo alla barra.",
    # bus-red-light
    ("school-bus", "bus-red-light", 0): "Semaforo rosso. Fermi.",
    ("school-bus", "bus-red-light", 1): "Aspettiamo?",
    ("school-bus", "bus-red-light", 2): "Sì. Aspettate qui.",
    # bus-green-light
    ("school-bus", "bus-green-light", 0): "Semaforo verde. Andiamo.",
    ("school-bus", "bus-green-light", 1): "Guardiamo da entrambe le parti?",
    ("school-bus", "bus-green-light", 2): "Sì. Guardate e ascoltate.",
    # bus-crossing-guard
    ("school-bus", "bus-crossing-guard", 0): "Guarda, c'è il vigile!",
    ("school-bus", "bus-crossing-guard", 1): "Dammi la mano. Usa le strisce.",
    ("school-bus", "bus-crossing-guard", 2): "Semaforo verde!",
    ("school-bus", "bus-crossing-guard", 3): "Bene. Andiamo.",

    # ========== school-library.ts ==========
    # lib-borrow-book
    ("school-library", "lib-borrow-book", 0): "Posso prenderlo in prestito?",
    ("school-library", "lib-borrow-book", 1): "Sì. Mostra la tessera.",
    ("school-library", "lib-borrow-book", 2): "Ecco.",
    ("school-library", "lib-borrow-book", 3): "Riportalo la settimana prossima.",
    # lib-be-quiet
    ("school-library", "lib-be-quiet", 0): "Shh. Silenzio.",
    ("school-library", "lib-be-quiet", 1): "Scusa.",
    ("school-library", "lib-be-quiet", 2): "Sussurra.",
    # lib-find-book
    ("school-library", "lib-find-book", 0): "Dove sono i libri sugli animali?",
    ("school-library", "lib-find-book", 1): "Su quello scaffale.",
    ("school-library", "lib-find-book", 2): "Grazie.",
    # lib-return-late
    ("school-library", "lib-return-late", 0): "Scusa, è in ritardo.",
    ("school-library", "lib-return-late", 1): "Va bene. La prossima volta in orario.",
    # lib-damaged
    ("school-library", "lib-damaged", 0): "La pagina è strappata.",
    ("school-library", "lib-damaged", 1): "Stai più attento la prossima volta.",
    ("school-library", "lib-damaged", 2): "Scusa.",
    # lib-read-together
    ("school-library", "lib-read-together", 0): "Vuoi leggere insieme?",
    ("school-library", "lib-read-together", 1): "Sì! Quale libro?",
    ("school-library", "lib-read-together", 2): "Questo sul gatto.",
    # lib-no-food
    ("school-library", "lib-no-food", 0): "Qui non si mangia.",
    ("school-library", "lib-no-food", 1): "Scusa. Lo metto via.",
    # lib-help-find
    ("school-library", "lib-help-find", 0): "Non trovo questo libro.",
    ("school-library", "lib-help-find", 1): "Ti aiuto io.",
    ("school-library", "lib-help-find", 2): "Eccolo.",
    ("school-library", "lib-help-find", 3): "Grazie.",

    # ========== school-nurse.ts ==========
    # nurse-feel-sick
    ("school-nurse", "nurse-feel-sick", 0): "Mi sento male.",
    ("school-nurse", "nurse-feel-sick", 1): "Vai dall'infermiera.",
    ("school-nurse", "nurse-feel-sick", 2): "Okay.",
    # nurse-head-hurts
    ("school-nurse", "nurse-head-hurts", 0): "Mi fa male la testa.",
    ("school-nurse", "nurse-head-hurts", 1): "Siediti. Riposa.",
    ("school-nurse", "nurse-head-hurts", 2): "Grazie.",
    # nurse-cut-finger
    ("school-nurse", "nurse-cut-finger", 0): "Mi sono tagliato il dito.",
    ("school-nurse", "nurse-cut-finger", 1): "Fammi vedere.",
    ("school-nurse", "nurse-cut-finger", 2): "Ti metto un cerotto.",
    ("school-nurse", "nurse-cut-finger", 3): "Grazie.",
    # nurse-temperature
    ("school-nurse", "nurse-temperature", 0): "Apri la bocca.",
    ("school-nurse", "nurse-temperature", 1): "Hai la febbre.",
    ("school-nurse", "nurse-temperature", 2): "Posso andare a casa?",
    ("school-nurse", "nurse-temperature", 3): "Chiamo tua mamma.",
    # nurse-stomach-ache
    ("school-nurse", "nurse-stomach-ache", 0): "Mi fa male la pancia.",
    ("school-nurse", "nurse-stomach-ache", 1): "Hai mangiato a pranzo?",
    ("school-nurse", "nurse-stomach-ache", 2): "No.",
    ("school-nurse", "nurse-stomach-ache", 3): "Bevi un po' d'acqua.",
    # nurse-scared
    ("school-nurse", "nurse-scared", 0): "Ho paura.",
    ("school-nurse", "nurse-scared", 1): "Non preoccuparti.",
    ("school-nurse", "nurse-scared", 2): "Qui sei al sicuro.",
    ("school-nurse", "nurse-scared", 3): "Grazie.",
    # nurse-go-home
    ("school-nurse", "nurse-go-home", 0): "È arrivata tua mamma.",
    ("school-nurse", "nurse-go-home", 1): "Posso andare a casa?",
    ("school-nurse", "nurse-go-home", 2): "Sì. Riposa a casa.",
    ("school-nurse", "nurse-go-home", 3): "Ciao. Grazie.",
    # nurse-better
    ("school-nurse", "nurse-better", 0): "Come ti senti?",
    ("school-nurse", "nurse-better", 1): "Mi sento meglio.",
    ("school-nurse", "nurse-better", 2): "Bene. Torna in classe.",
}


def process_file(path: Path, stem: str):
    src = path.read_text(encoding="utf-8")
    original = src

    # Find all natural blocks and their dialogue IDs
    # Pattern: id: 'DIALOGUE_ID', ... natural: [ ... ]
    # We need to match the natural array contents

    dialogue_pattern = re.compile(
        r"\{\s*id:\s*'([^']+)',\s*scenario:\s*'([^']+)',\s*turns:\s*\[.*?\],\s*natural:\s*\[(.*?)\]",
        re.DOTALL,
    )

    def replacer(m):
        dialogue_id = m.group(1)
        natural_block = m.group(3)

        # Find all { speaker: 'X', en: "..." } in natural block
        turn_pattern = re.compile(r"\{\s*speaker:\s*'([^']+)',\s*en:\s*([^\n]+?)\s*\}")
        turns = list(turn_pattern.finditer(natural_block))

        new_block = natural_block
        offset = 0
        for idx, turn_m in enumerate(turns):
            key = (stem, dialogue_id, idx)
            if key in TRANSLATIONS:
                it_text = TRANSLATIONS[key]
                # Insert it: "..." after en: ...
                original_turn = turn_m.group(0)
                new_turn = original_turn.replace(
                    f"en: {turn_m.group(2).strip()}",
                    f"en: {turn_m.group(2).strip()}, it: '{it_text}'"
                )
                start = turn_m.start() + offset
                end = turn_m.end() + offset
                new_block = new_block[:start] + new_turn + new_block[end:]
                offset += len(new_turn) - len(original_turn)

        return m.group(0).replace(natural_block, new_block)

    result = dialogue_pattern.sub(replacer, src)

    if result != original:
        path.write_text(result, encoding="utf-8")
        print(f"✓ Updated {path.name}")
    else:
        print(f"⚠ No changes in {path.name}")


def main():
    files = [
        ("classroom", SCHOOL_DIR / "classroom.ts"),
        ("gym", SCHOOL_DIR / "gym.ts"),
        ("hallway-locker", SCHOOL_DIR / "hallway-locker.ts"),
        ("lunch-hall", SCHOOL_DIR / "lunch-hall.ts"),
        ("playground", SCHOOL_DIR / "playground.ts"),
        ("school-bathroom", SCHOOL_DIR / "school-bathroom.ts"),
        ("school-bus", SCHOOL_DIR / "school-bus.ts"),
        ("school-library", SCHOOL_DIR / "school-library.ts"),
        ("school-nurse", SCHOOL_DIR / "school-nurse.ts"),
    ]

    for stem, path in files:
        if path.exists():
            process_file(path, stem)
        else:
            print(f"✗ Missing {path}")


if __name__ == "__main__":
    main()
