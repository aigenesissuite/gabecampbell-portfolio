# Gen conversation stills — regeneration

Sources for public/images/gen-*.webp (aiOS case study "Onboarding as a
conversation"). Rendered with the imessage-d SwiftUI engine (AI Genesis
repo, social-engine/imessage-d):

    BIN=social-engine/imessage-d/.build/release/imessage-d
    $BIN --scenario scenario-onboard.json --probe --at 14.9   # → /tmp/probe.png
    $BIN --scenario scenario-dayone.json --probe               # → take /tmp/probe-4.png (95%)
    ffmpeg -i still.png -vf scale=720:-1 -quality 82 gen-<name>.webp
