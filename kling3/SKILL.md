---
name: kling3
description: >
  AI video generation skill using Kling 3.0 for creating cinematic video clips from still images
  or text prompts. Covers the Five-Layer Prompting Formula (Scene, Characters, Action, Camera, Audio),
  multi-shot storyboarding, camera emotional math, native audio and dialogue, image-to-video workflows,
  and frame chaining for continuity. Use this skill whenever the user wants to generate AI video,
  animate a still image, create video clips, write Kling prompts, plan video ads, produce motion content,
  or do anything involving AI video generation. Also trigger when the user mentions Kling, klingai,
  "animate this image", "make it move", "generate a video", "create a clip", video generation,
  motion prompts, multi-shot, or cinematic video content of any kind.
---

# Kling 3.0 --- AI Video Generation

This skill guides you through generating cinematic AI video clips using Kling 3.0. It covers everything from animating a single still image to building multi-shot ad sequences with native dialogue, camera movement, and sound design.

The core principle: **you are a director, not a generator.** Every prompt is a shot note. Every multi-shot is a storyboard. Think in terms of what the camera sees, what moves, what we hear.

---

## The Two Ways to Use Kling 3.0

### 1. Image-to-Video (Recommended for Ads)
Upload a still image and write a prompt describing what **moves and changes**. The AI already sees your image --- do not re-describe what is visible. Only describe motion, camera movement, and audio.

### 2. Text-to-Video
Write a complete scene from scratch. The AI generates both the visuals and the motion. Good for abstract, VFX, or scenes where you don't have a starting image.

**For ad production, always use Image-to-Video.** Generate your stills first (using NanoBanana or similar), approve them, then animate the best ones.

---

## The Five-Layer Formula (Every Prompt, This Order)

Every Kling 3.0 prompt follows five layers in this exact sequence. Skipping layers (especially Camera) produces flat, boring output.

```
Layer 1: SCENE       --- Where and when (environment, mood, atmosphere)
Layer 2: CHARACTERS  --- Who is in it (described by appearance, not names)
Layer 3: ACTION      --- What happens (sequential, with time markers)
Layer 4: CAMERA      --- How we see it (shot type, movement, transitions)
Layer 5: AUDIO       --- What we hear (dialogue, ambient, SFX, music)
```

### Layer 1: Scene (Always First)
Ground the AI in a clear environment before anything else. Without this, everything downstream is unanchored.

```
A quiet rooftop garden at dusk, city skyline glowing orange and purple.
String lights cast warm pools across weathered wooden planters.
Cool breeze rustles small herb plants.
```

Include: location, time of day, lighting, weather, mood, key objects.

### Layer 2: Characters (Define Before Actions)
Describe characters by their **appearance**, never by name. Use the same descriptor every time you reference them.

```
GOOD: "The woman in the cream cardigan, messy bun, paint-stained fingers"
BAD:  "Sarah" or "she" or "the woman"
```

Rules:
- Assign unique visual descriptors (clothing, hair, distinguishing features)
- Maintain the SAME descriptor throughout the entire prompt
- Never use pronouns when multiple characters are present
- Define characters BEFORE they do anything

### Layer 3: Action (Sequential, Not Stacked)
Describe actions as a timeline. One primary action per time segment. For clips over 10 seconds, always use time markers.

```
(0-3s) She carefully places the pot on the ledge, adjusting it twice.
(4-7s) She steps back, crosses her arms, tilts her head.
(8-10s) A faint smile appears. She reaches forward and touches one leaf.
```

Rules:
- One main action per time segment
- Include micro-motions for realism (breathing, blinking, subtle shifts)
- Physical action BEFORE dialogue (always)
- Keep actions physically realistic

### Layer 4: Camera (NOT Optional)
Without camera direction, Kling defaults to boring static framing. Camera is what makes the difference between a generated clip and a directed shot.

```
Medium tracking shot follows her from the side. At (5s), camera pushes
into a close-up of her face. At (8s), camera pulls back to wide shot
revealing the empty street.
```

See `references/camera-guide.md` for the full camera system --- shot types, movements, angles, and emotional math.

### Layer 5: Audio (Separate Section)
Kling 3.0 generates synchronized audio WITH the video. Dialogue, ambient sound, and SFX are all co-generated with the visuals.

```
[Woman in cream cardigan, quiet warm voice]: "There. That's better."
Ambient: Distant city hum, wind through leaves, faint music from
a neighbouring apartment.
```

See the Dialogue section below for the full dialogue system.

---

## Image-to-Video: The Key Rule

When animating a still image, the AI already sees everything in the frame. Your prompt should describe **ONLY what moves and changes**.

```
GOOD: "She lifts the product toward the camera, turning it slowly.
       Hair moves gently in the breeze. Camera pushes in."

BAD:  "A woman in a white robe in a modern kitchen holds a black box."
      (The AI already sees all of this in the image)
```

This is the single most common mistake. If you re-describe the image, the AI gets confused and may change things you wanted to stay the same.

---

## Dialogue System

Kling 3.0 has native dialogue with lip-sync. The audio and mouth movements are generated together, not stitched after.

### How to Write Dialogue

```
[Character descriptor, voice quality]: "The dialogue line."
```

Examples:
```
[Woman in grey coat, soft tired voice]: "I always end up here."
[Barista, cheerful upbeat voice]: "Your usual?"
[Man in navy suit, low controlled tone]: "We need to talk."
```

### The 4 Dialogue Rules

**P1: Unique Descriptors** --- Every character gets a unique visual label. Never use "he", "she", or generic labels.

**P2: Action Before Speech** --- Always describe what the character DOES before what they SAY. The physical action anchors the dialogue.
```
She slams the cup down on the counter.
[Woman in denim jacket, frustrated]: "I'm done pretending."
```

**P3: Unique Voice Per Character** --- Give each character a distinct voice quality:
- `soft tired voice`, `cheerful upbeat voice`, `low controlled tone`
- `raspy whisper`, `enthusiastic shout`, `calm measured pace`
- `trembling voice`, `sleepy amused tone`, `sharp defensive voice`

**P4: Temporal Connectors** --- Use linking words between dialogue turns to prevent speech from merging:
- "Immediately," "After a beat," "Pause." "Then," "A moment later,"

### Dialogue Duration Guide

| Content | Duration Needed |
|---------|:--------------:|
| No dialogue, ambient only | 3-5 seconds |
| Single line of dialogue | 5-7 seconds |
| Two-line exchange | 8-10 seconds |
| Complex multi-character | 12-15 seconds |

**Dialogue drift warning:** Dialogue works best in the first 10 seconds. In the last 5 seconds of a 15-second clip, lip-sync can drift. Put heavy dialogue early, use non-speaking action late.

---

## Multi-Shot Storyboarding

Kling 3.0 can generate up to 6 camera cuts within a single 15-second video.

### Method: Labelled Shots in Prompt
```
Shot 1 (4s): Wide establishing shot of a modern apartment kitchen.
Morning sunlight streams through windows.

Shot 2 (3s): Medium close-up of hands opening a matte black box.
Soft unboxing sounds.

Shot 3 (4s): The woman in a white robe picks up the product, turns
it in her hands. [Woman, pleasantly surprised]: "Oh, this is nice."

Shot 4 (4s): Close-up of the product on marble counter. Camera slowly
orbits. Warm ambient light, premium feel.
```

### Shot Duration Guide

| Shot Content | Duration |
|-------------|:--------:|
| Static beauty / product display | 2-3 seconds |
| Simple action, no dialogue | 3-5 seconds |
| Action + single dialogue line | 5-7 seconds |
| Complex multi-character dialogue | 8-10 seconds |

### Multi-Shot Rules
- Total of all shot durations must equal video duration (3-15s max)
- Multi-shot and Start/End Frame CANNOT be used together
- Character consistency is maintained across shots automatically
- Specify edit transitions between shots: HARD CUT, SMASH CUT, WHIP CUT

---

## Frame Chaining (Continuity Between Clips)

When your ad needs multiple separate clips that feel continuous:

1. Generate Clip A
2. Extract the **last frame** of Clip A
3. Use that frame as the **start image** for Clip B
4. Write Clip B's prompt describing only the new motion

This creates seamless visual continuity between clips that were generated separately.

---

## Settings & Cost Optimization

### Resolution
- **720p for iterations** --- cheaper, faster, good enough to judge quality
- **1080p for finals only** --- regenerate approved clips at full resolution

### Duration
- **5 seconds** --- cheapest, good for single actions or beauty shots
- **10 seconds** --- standard for most ad clips
- **15 seconds** --- maximum, use for complex multi-shot or heavy dialogue

### Standard vs Omni

| Use Standard When | Use Omni When |
|---|---|
| Quick product demos | Character must match across many clips |
| Single ads, social media | Voice cloning from reference video |
| Budget-conscious work | Matching a specific actor/model look |
| Most projects | Series content with recurring character |

**Standard is ~40% cheaper than Omni.** Use Standard for most work.

### Approximate Costs
- 5s clip at 720p: ~$0.25-0.35
- 10s clip at 720p: ~$0.35-0.50
- 10s clip at 1080p: ~$0.50-0.70
- Multi-shot (15s, 4 shots): ~$0.60-0.90

---

## Negative Prompting

Use `-no` prefix to exclude unwanted elements (NOT `--neg` like in image generation):

```
-no blur, -no flickering, -no morphing, -no camera shake,
-no text overlays, -no watermarks, -no lens flare
```

For product ads:
```
-no hands disappearing, -no product deformation, -no label blur,
-no colour shift, -no text warping, -no unrealistic shadows
```

---

## Common Problems and Fixes

| Problem | Fix |
|---------|-----|
| Boring static clip | Add camera movement (Layer 4). Without it, Kling defaults to static |
| Dialogue out of sync | Put dialogue in first 10 seconds. Use action-only for final 5 seconds |
| Character face changes mid-clip | Use image-to-video with a strong starting image |
| Hands/fingers melt | Add `-no warped hands, -no extra fingers` to negative |
| Product morphs or warps | Add `-no product deformation, -no morphing` and keep product stable in prompt |
| Two clips don't match | Use frame chaining (last frame of A = start frame of B) |
| Clip has unwanted AI music | Mute in editing. Kling always generates some audio --- you control it in post |
| Motion too fast/chaotic | Use "slow-motion" or "deliberate, measured" in prompt. Specify speed explicitly |
| Re-describing the image | For image-to-video: ONLY describe what MOVES. Delete any static descriptions |
| Zoom/morph when you want static | Don't use start+end frames for static scenes. Use image-to-video with a single frame |

---

## Quick Workflow for Ad Clips

1. **Start with an approved still image** (from NanoBanana or similar)
2. **Go to klingai.com** and select Image-to-Video
3. **Upload your still** as the starting image
4. **Select Kling 3.0**, set duration (5s or 10s), resolution (720p for testing)
5. **Write your motion prompt** using the Five-Layer Formula:
   - Scene context (brief --- the image provides most of this)
   - Character (only if not clear from image)
   - Action (what moves, in time-marker sequence)
   - Camera (shot type + movement --- this is critical)
   - Audio (dialogue, ambient, SFX)
6. **Add negative prompts** (`-no blur, -no flickering, -no morphing`)
7. **Generate and review**
8. **If approved**, regenerate at 1080p for final use
9. **If not**, adjust the prompt and regenerate at 720p

---

## Reference Files

For deeper detail on specific topics, read these reference files:

- `references/camera-guide.md` --- Full camera system: shot types, movements, angles, emotional math, pacing guide
- `references/prompt-library.md` --- 20+ ready-to-use prompt templates for different ad types, scenes, and styles
