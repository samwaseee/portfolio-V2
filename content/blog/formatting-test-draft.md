---
title: "Formatting test: math, code and tables (draft)"
date: "2026-11-11"
summary: "A draft post that exercises every blog feature. It shows up in development and is hidden from the live site."
tags: ["meta", "federated-learning"]
draft: true
---

This post exists to check that every feature renders correctly. Because it is marked `draft: true`, it appears when you run `npm run dev` and is **left out of production builds, the sitemap and the RSS feed**. Delete it, or turn it into a real post, when you are ready.

## Inline and display math

Inline math sits in a sentence: the global model after round $t$ is $w_{t+1}$.

Federated averaging weights each client's model by how much data it holds:

$$
w_{t+1} = \sum_{k=1}^{K} \frac{n_k}{n}\, w_{t+1}^{k}, \qquad n = \sum_{k=1}^{K} n_k
$$

## Code

```python
import numpy as np

def fed_avg(client_weights, client_sizes):
    """Weighted average of client parameters (FedAvg)."""
    total = sum(client_sizes)
    return sum(w * (n / total) for w, n in zip(client_weights, client_sizes))
```

```ts
type Post = { slug: string; title: string; draft?: boolean };

export const published = (posts: Post[]) => posts.filter((post) => !post.draft);
```

## Tables, lists and quotes

| Method | Typical use | Note |
| --- | --- | --- |
| FedAvg | Baseline aggregation | Weights clients by sample count |
| FedProx | Heterogeneous clients | Adds a proximal term to the local loss |

- Bullet lists work.
- So do [links](https://nextjs.org) and `inline code`.

1. Numbered lists work too.
2. Task lists need GitHub-style syntax:
   - [x] done
   - [ ] not yet

> Block quotes get a red accent bar.

## Frontmatter reference

Every post is one Markdown file in `content/blog/`. The file name becomes the URL (`my-post.md` is served at `/blog/my-post`).

```yaml
---
title: "Your title"            # required
date: "2026-11-12"             # required, YYYY-MM-DD
summary: "One or two sentences shown in the list and in link previews."  # required
tags: ["federated-learning"]   # optional
updated: "2026-12-01"          # optional
cover: "/images/blog/my-cover.webp"  # optional, banner shown at the top; also used for previews if there is no ogImage
ogImage: "/images/blog/my-og-image.jpg"  # optional, image used only for link previews, 1200x630 JPEG or PNG in public/images/blog/
draft: true                    # optional, hides the post from production
---
```
