---
name: nanobanana2
description: >
  AI image generation skill using NanoBanana Pro on Kie.ai for creating photorealistic stills.
  Includes character reference locking, ultra-realism prompt templates with modular layers,
  camera system declarations, negative prompts, and scene templates. Use this skill whenever
  the user wants to generate AI images, create photorealistic stills, build character references,
  write NanoBanana prompts, plan visual content for ads or social media, or produce any kind
  of AI photography. Also trigger when the user mentions Kie.ai, NanoBanana, image generation,
  "generate a photo", "create a still", "make me an image", character consistency, reference
  lock, or photorealistic content of any kind.
---

# NanoBanana Pro 2 --- Photorealistic AI Image Generation

This skill guides you through generating photorealistic AI images using the NanoBanana Pro model on Kie.ai. It covers the full workflow from locking a consistent character to generating final scene stills that look indistinguishable from real photographs.

The secret to great AI images is **specificity**. Vague prompts produce AI-looking results. Detailed prompts describing real camera behaviour, real skin texture, real fabric physics, and real lighting produce images that pass as photographs.

---

## The Workflow (Follow This Order)

Every project follows these steps. Do not skip ahead.

```
Step 1: Define your character(s)
Step 2: Generate and LOCK a character reference image
Step 3: Plan your scenes
Step 4: Write prompts using the template system
Step 5: Generate scenes (always with character reference attached)
Step 6: Quality check every image before moving on
```

---

## Step 1: Character Reference Lock

This is the most important step. Without a locked character reference, every scene will feature a different-looking person and the project falls apart.

### How It Works

You generate a clean, well-lit portrait of your character with no distracting background. This image becomes your **anchor** --- you attach it as the reference/input image for every single scene you generate afterwards. This is how NanoBanana maintains the same face, body, and features across different scenes.

### Writing the Character Reference Prompt

Use this template:

```
Photorealistic 9:16 vertical frame. Ultra-realism master execution.
Shot on iPhone 15 Pro main camera, natural processing.

Subject: [AGE] [ETHNICITY if needed] [GENDER], [FACIAL FEATURES],
[HAIR DESCRIPTION --- colour, length, style, texture],
[EXPRESSION --- "calm and composed", "warm confident smile", etc.],
[BUILD --- "athletic", "slender", "average", etc.],
standing in a neutral studio with soft even lighting from front-left.
Clean white/light grey background.

Natural skin with visible pores and subtle texture, baby hairs
at hairline, natural catchlights in eyes matching the studio light.
No heavy makeup. Clean, natural appearance.

--neg no plastic skin, no extra fingers, no CGI look, no identity change,
no uncanny eyes, no watermark, no cartoon style, no illustration
```

### Character Reference Checklist

Before locking your reference, the image must pass all of these:

- [ ] Looks like a real photograph of a real person (not AI-generated)
- [ ] Face is clearly visible and well-lit
- [ ] Skin has visible pores and natural texture (not smooth/plastic)
- [ ] Hair looks natural with strand separation (not helmet hair)
- [ ] Eyes have realistic catchlights (not glowing rings)
- [ ] Expression is natural and relaxed
- [ ] No hand/finger weirdness visible
- [ ] No background distractions

Generate 3--4 variations. Pick the most realistic one. **Save this image --- it is your character reference for everything that follows.**

### Multiple Characters

If your project has more than one character, generate and lock a separate reference for each. Keep them clearly named (e.g., `character_ref_sarah.png`, `character_ref_james.png`). When generating a scene with a specific character, attach THAT character's reference.

> **One character per project is strongly recommended.** Maintaining consistency for multiple characters multiplies the difficulty. If you can tell your story with one person, do it.

---

## Step 2: The Prompt Template System

Every prompt follows the same structure. Think of it as building blocks --- you always use the foundation and camera, then add whichever realism layers are relevant to your scene.

### Prompt Structure (This Order, Every Time)

```
1. FRAME FOUNDATION     --- "Photorealistic 9:16 vertical frame..."
2. CAMERA SYSTEM        --- "Shot on [camera], [lens], [behaviour]"
3. SUBJECT              --- Who, what they look like, what they wear
4. ENVIRONMENT          --- Where, when, what surrounds them
5. LIGHTING             --- Source, direction, quality, colour temperature
6. FRAMING              --- Shot type, camera angle, depth of field
7. REALISM LAYERS       --- Pick the relevant ones (see below)
8. PRESERVATION LOCK    --- Keep identity consistent
9. NEGATIVE PROMPT      --- What to avoid
```

### Frame Foundation (Always Include)

```
Photorealistic 9:16 vertical frame. Ultra-realism master execution.
```

Change `9:16` to `16:9` for landscape, `1:1` for square, or `4:5` for Instagram portrait.

### Camera System (Always Include)

Pick the camera that matches your content style:

| Style | Camera Declaration |
|-------|-------------------|
| **UGC / Casual** | `Shot on iPhone 15 Pro, natural processing, realistic mobile photography` |
| **Editorial / Fashion** | `Shot on Sony A7IV with 85mm f/1.4, shallow depth of field` |
| **Cinematic** | `Shot on ARRI Alexa, cinematic colour grade, film-like highlight roll-off` |
| **Lifestyle** | `Shot on Fujifilm X-T5 with 35mm f/1.4, natural film simulation` |
| **Product** | `Shot on Sony A7IV with 90mm macro, f/8 for product sharpness` |

The camera choice changes how the whole image feels. iPhone = authentic and casual. Sony = polished and editorial. ARRI = filmic and cinematic. This is not decorative --- it genuinely shifts the rendering style.

### Realism Layers (Pick What's Relevant)

These are the magic ingredient. Read the full layer reference at `references/realism-layers.md`. Here is the quick summary of when to use each:

| Layer | Code | Use When |
|-------|------|----------|
| Skin texture | C1 | Any scene with a person's face/body visible |
| Hair realism | C2 | Any scene with visible hair |
| Eyes, lips, teeth | C3 | Close-ups where facial features are prominent |
| Facial asymmetry | C4 | Portraits and close-ups (adds subtle realism) |
| Fabric & clothing | C5 | Any scene showing clothing |
| Product/object | C6 | Product shots, objects in hands |
| Contact shadows | C7 | Almost every scene (grounds objects in reality) |
| Hands & fingers | C8 | Any scene with visible hands |
| Camera finish | C9 | Every scene (matches the camera system you chose) |

**You do not need every layer every time.** A wide landscape shot does not need C3 (eyes/lips) or C8 (hands). A product-only shot does not need C1 (skin) or C2 (hair). Think about what is actually visible in the frame.

### Preservation Lock (Always Include)

```
Keep everything identical: same identity, same expression, same pose,
same camera angle, same framing, same lighting direction, same composition.
Only enhance ultra-realism micro-details and physical believability.
```

This tells the AI not to drift from your character reference.

### Negative Prompt (Always Include)

Minimum version (use this at least):
```
--neg no plastic skin, no extra fingers, no warped text, no CGI look,
no identity change, no uncanny eyes, no floating objects, no watermark
```

Full version for maximum quality --- see `references/realism-layers.md` for the complete negative prompt block.

---

## Step 3: Generating on Kie.ai

### Setup

1. Go to **kie.ai**
2. Select the **NanoBanana Pro** model
3. Set aspect ratio to **9:16** (or your chosen ratio)
4. Upload your **character reference image** as the reference/input image

### For Each Scene

1. **Attach your character reference** as the input image (do this EVERY time)
2. Write your prompt following the template structure above
3. Generate the image
4. Review against the quality checklist below
5. If it passes, save it. If not, regenerate with prompt tweaks.

### Quality Checklist for Every Scene

- [ ] **Same person?** Face matches your character reference
- [ ] **Real photograph?** Would you believe this was taken by a camera?
- [ ] **Skin is real?** Visible pores, no plastic/waxy look
- [ ] **Hair is natural?** Strand separation, flyaways, not a helmet
- [ ] **Hands are correct?** Exactly 5 fingers, natural joints (if visible)
- [ ] **Grounded?** Objects have contact shadows, nothing floats
- [ ] **Lighting consistent?** Shadows and highlights make sense together
- [ ] **No AI artefacts?** No warped text, melted features, extra limbs

If an image fails on "same person", try regenerating with the same prompt. If it consistently drifts, make the character description in your prompt more specific.

If an image has great composition but plastic skin, add stronger skin realism language from layer C1.

---

## Step 4: Scene Templates (Quick Start)

For full templates with all the details, see `references/scene-templates.md`. Here are the five main types:

### Portrait / Talking Head
Best for: Social media content, testimonial-style shots, profile images.
Camera: iPhone 15 Pro (UGC) or Sony A7IV (editorial).
Key layers: C1 (skin), C2 (hair), C3 (eyes), C4 (asymmetry), C5 (fabric), C9 (camera finish).

### Product Hero Shot
Best for: E-commerce, product launches, catalogue images.
Camera: Sony A7IV with macro lens.
Key layers: C6 (product), C7 (grounding).

### Lifestyle B-Roll
Best for: Brand storytelling, environmental context, person-in-world shots.
Camera: Fujifilm X-T5 or iPhone 15 Pro.
Key layers: C1 (skin), C2 (hair), C5 (fabric), C7 (grounding), C9 (camera finish).

### Hands + Product
Best for: Product demos, unboxing moments, application shots.
Camera: Sony A7IV with 50mm.
Key layers: C6 (product), C7 (grounding), C8 (hands --- critical).

### UI / Screen Mockup
Best for: App screenshots, website mockups, notification displays.
Camera: iPhone 15 Pro.
Key layers: C7 (grounding). Keep text large and minimal (3--5 words max).

---

## Common Problems and Fixes

| Problem | Fix |
|---------|-----|
| Skin looks plastic/waxy | Add more C1 skin detail: "visible pores, subtle T-zone oiliness, NO plastic shine" |
| Hair looks like a helmet | Add C2 detail: "baby hairs at hairline, strand separation, flyaways" |
| Eyes look uncanny/glowing | Add C3 detail: "catchlights matching scene light source, NO glowing iris rings" |
| Objects float above surfaces | Add C7 detail: "contact shadow directly beneath object, darkest at touch point" |
| Extra/fused fingers | Add C8 and strengthen negative: "EXACTLY 5 fingers per hand, realistic joints" |
| Character face keeps changing | Make character description more specific in prompt + always attach reference |
| Text on products is garbled | Do not try to render specific text. Add text as overlay in your editor later |
| Image looks AI-generated overall | Add camera finish layer (C9) and film grain. Specify the camera model |

---

## File Naming Convention

Keep your project organised:

```
project-name/
  character_reference.png
  scene_01_[description].png
  scene_02_[description].png
  scene_03_[description].png
  ...
```

Example:
```
kyri-ss26/
  character_reference.png
  scene_01_shoji_silhouette.png
  scene_02_mirror_shot.png
  scene_03_threshold_colour.png
  scene_04_exterior_blossom.png
```

---

## Cost Guide

| Action | Approximate Cost |
|--------|-----------------|
| Character reference (3--4 gens) | $0.45--$0.60 |
| Scene still (per generation) | ~$0.15 |
| 12-scene project (with retries) | $3--$6 total |

Budget roughly $0.15 per image generation. Expect 1.5--2x your scene count in total generations (some scenes need a second attempt).

---

## Key Principles

1. **Specificity beats vagueness.** "Visible skin pores, baby hairs at the hairline, natural catchlights" beats "realistic-looking."
2. **Always attach the character reference.** Every single generation. No exceptions.
3. **Pick the right camera.** iPhone for casual, Sony for editorial, ARRI for cinematic. It changes everything.
4. **Only include relevant layers.** A wide shot does not need eye detail. A product shot does not need hair detail.
5. **Never try to render brand text in AI.** Generate without text, overlay it in your editor.
6. **Iterate cheaply.** At $0.15 per image, regenerating is cheaper than settling for mediocre.
7. **Check quality before moving on.** A bad still cannot be fixed downstream.
