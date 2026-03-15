# Realism Layers --- Complete Reference

These are the modular building blocks that make AI images look like real photographs. Copy the relevant blocks into your prompt. You do not need all of them every time --- only include layers for things that are actually visible in your scene.

---

## C1: Skin Realism

**Use when:** Any person's face or body is visible in the frame.

```
SKIN: Visible pores at natural density, fine micro-bumps, gentle uneven
smoothness. Subtle micro-imperfections --- tiny blemishes (2-3 max, minimal),
faint natural redness around cheeks and nose bridge, slight under-eye texture
with fine lines (not dark circles). Soft realistic specular highlights with
natural T-zone oiliness on forehead and nose. Healthy clean skin --- flattering
but real. NO metallic sheen, NO plastic shine, NO waxy texture.
```

**When skin looks too smooth/plastic, add:**
```
Strong emphasis on pore visibility and matte skin regions between oily T-zone.
Soft diffused highlights that roll off gradually. Absolutely no uniform
smoothness, no airbrush effect, no beauty filter appearance.
```

---

## C2: Hair Realism

**Use when:** Hair is visible in the scene.

```
HAIR: Realistic baby hairs and minimal flyaways at hairline and temples.
Natural strand separation with root shadowing. Subtle volume variation
throughout --- not perfectly uniform density. Hair maintains overall style
shape with just enough natural chaos to look real. NO helmet hair, NO
perfectly smooth edges, NO CGI-perfect strands.
```

**When hair looks too perfect/fake, add:**
```
Individual strand visibility with natural separation, gentle flyaways around
face frame, visible root texture with shadow depth. Volume variation from
thick to thin areas naturally.
```

---

## C3: Eyes, Lips, and Teeth

**Use when:** Close-ups where facial features are clearly visible.

```
EYES: Natural catchlights matching the scene's light source (window light =
rectangular catchlight, ring light = circular). Subtle moisture line along
lower lid. Realistic iris texture with natural colour variation. Visible
sclera detail (very subtle). NO glowing rings around iris, NO unnaturally
bright irises, NO artificial shine.

LIPS: Natural lip texture with micro-creases and fine lines. Subtle specular
from natural moisture (not glossy unless makeup is specified). Accurate colour
gradient from lip edge to centre.

TEETH (if visible): Natural enamel with subtle translucency. Realistic colour
with slight warmth, not pure white. NO perfect veneer appearance.
```

---

## C4: Facial Asymmetry

**Use when:** Portraits and close-ups. This layer adds the subtle imperfection that makes a face look real instead of AI-generated.

```
ASYMMETRY: Very subtle natural facial asymmetry --- micro differences in brow
height, cheek fullness, eyelid openness. Barely perceptible. Slight nostril
size difference (minimal). Natural ear position variation.

CRITICAL: Do NOT change the identity or overall facial structure. No dramatic
reshaping, no obvious asymmetry. This should be invisible unless you look
for it.
```

---

## C5: Fabric and Clothing

**Use when:** Clothing is visible in the scene.

```
FABRIC: Visible weave or knit pattern appropriate to the material type.
Fine stitching visible, seam definition, hem detail. Natural fold tension
with slight bunching at body contact points (underarms, waist, shoulders).
Fabric drapes according to its weight --- heavy fabrics pool, light fabrics
float. Micro-wear signs: tiny fuzz fibres, subtle pilling in high-friction
areas (very light). Correct material response to light --- matte cotton
absorbs, satin reflects. NO plastic shine on natural fabrics.
```

**Material-specific notes:**
- Cotton/jersey: visible knit texture, slight stretch marks at tension
- Denim: visible weave, subtle fade patterns, belt loop detail
- Silk/satin: realistic sheen and drape, catches light along folds
- Wool/knit: visible fibre texture, cable patterns if present
- Leather: subtle grain, natural creasing at flex points

---

## C6: Product and Object Materials

**Use when:** Products or objects are prominent in the scene.

```
PRODUCT MATERIAL: Micro-texture and micro-wear consistent with real handling.
Tiny scratches or scuffs on edges and high-contact areas. Subtle surface
roughness variation (not perfectly smooth CGI).

GLOSSY SURFACES (glass, plastic, lacquer): Faint fingerprint smudges or
soft oily marks that gently break perfect reflections. Micro dust specks
visible in highlights only (2-4 specks, minimal).

MATTE SURFACES: Subtle surface variation, appropriate light absorption.

Realistic specular highlights matching the material type. Accurate highlight
roll-off (soft for matte, sharp for gloss). NO "CGI mirror" look, NO
perfectly uniform surfaces.
```

---

## C7: Grounding and Contact Shadows

**Use when:** Almost every scene. This is what prevents objects from looking like they are floating.

```
GROUNDING: Realistic contact shadows where every object touches a surface.
Shadow darkest at the contact point, fading gradually outward. Subtle ambient
occlusion in all creases and contact points:
- Under chin where neck meets
- In fabric fold depths
- Where object base meets table/surface
- Around fingers gripping objects
- At shoe/foot contact with ground

Shadow softness must match the light source:
- Hard directional light = sharper shadows
- Soft diffused light = softer gradient shadows

Consistent shadow direction throughout the entire frame. NO floating objects.
```

---

## C8: Hands and Fingers

**Use when:** Hands are visible in the scene. This is the highest-risk area for AI artefacts.

```
HANDS: Correct anatomy --- EXACTLY 5 fingers per hand, clearly separated.
Realistic knuckle joint structure with natural bending. Natural nail shape
with visible cuticles. Age-appropriate hand skin (fine lines across knuckles,
subtle dryness at joints).

IF HOLDING AN OBJECT:
- Accurate grip alignment --- fingers wrap naturally
- Subtle pressure deformation where fingers contact object
- Proper occlusion --- fingers correctly go behind the object
- Object reflections show hand position accurately

FORBIDDEN: extra fingers, fused fingers, melted joints, floating hands,
impossible bend angles, missing knuckles.
```

**When hands keep coming out wrong, strengthen the negative:**
```
--neg no extra fingers, no fused fingers, no missing fingers, no melted
joints, no warped hands, no impossible grip, no floating hands, no
anatomical errors on hands
```

---

## C9: Camera Finish

**Use when:** Every scene. Pick the option that matches your camera system declaration.

### Option A: UGC / Smartphone Finish
```
CAMERA FINISH: Mild shadow noise appropriate to a smartphone sensor.
Slight computational photography texture (natural sharpening, not crispy).
Gentle micro-contrast typical of mobile processing. Realistic dynamic range
with slight highlight compression and lifted shadows. Natural colour
processing (slightly saturated). NO HDR halos, NO artificial clarity boost.
```

### Option B: DSLR / Mirrorless Finish
```
CAMERA FINISH: Very fine film-like grain (subtle, organic). Subtle halation
around bright highlights (minimal glow). Soft highlight roll-off with no
digital clipping feel. Natural bokeh in out-of-focus areas. Realistic lens
characteristics (slight vignette if wide aperture). Clean colour transitions.
```

### Option C: Cinematic Finish
```
CAMERA FINISH: Subtle film grain texture. Cinematic colour grade with
slightly desaturated shadows and warm highlights. Filmic highlight handling
with soft shoulder. Gentle halation on bright sources. Anamorphic lens
characteristics if appropriate (horizontal lens flares, oval bokeh).
```

---

## Complete Negative Prompt (Full Version)

Copy this entire block and add it to the end of any prompt for maximum artefact prevention:

```
--neg no identity change, no face reshaping, no new hairstyle, no makeup
overhaul, no age change, no body shape modification, no plastic skin, no
porcelain smoothing, no over-sharpening, no crunchy pores, no waxy texture,
no metallic sheen, no wet wax look, no airbrush effect, no beauty filter,
no extra limbs, no extra fingers, no fused fingers, no missing fingers, no
extra teeth, no melted joints, no impossible anatomy, no warped hands, no
deformed faces, no asymmetry exaggeration, no uncanny valley, no warped
text, no misspellings, no hallucinated typography, no logo distortion, no
unreadable text, no blurry text, no uncanny eyes, no glowing irises, no
wandering gaze, no glowing rings around iris, no unnatural catchlights, no
floating objects, no inconsistent shadows, no CGI look, no cartoon style,
no anime style, no illustration style, no 3D render look, no video game
graphics, no watermark, no signature, no border, no HDR halos, no chromatic
aberration, no heavy vignette, no compression artefacts, no banding
```

## Short Negative Prompt (Quick Version)

For less critical scenes where speed matters more than perfection:

```
--neg no plastic skin, no extra fingers, no warped text, no CGI look,
no identity change, no uncanny eyes, no floating objects, no watermark
```
