# sbhacks24

# Counsely
## Inspiration
**Life, frankly, is hard.**

Thankfully, mental health professionals such as therapists and counselors are here to help us in our increasingly chaotic world. This sector is expanding: according to a study by the JAMA Health Forum, use of mental health related services **jumped by 38.8%** over the course of the pandemic alone. For 2021 alone, Statista reports around **41.7 million U.S. adults received services,** implying a massive need for support. As new counselors enter the field, they may more often than not be "thrown into the deep end" due to this urgency. Furthermore, _even seasoned therapists are not immune to the social-emotional alienation that comes with the digital age,_ particularly as it manifests in the newly popular "telehealth visit."

With Counsely, we hope to bridge the gap between client and counselor. We wanted to build a tool for counselors to lessen their cognitive stress and provide additional insight they might not glean via dialogue alone. At the same time, it was our priority to make the tool fully unobtrusive to both parties, so that neither feel interrupted at any point.

## What it does
**Counsely is an is a real-time companion for therapists, ready to assist during and after sessions.**

As an assistant, Counsely has two main jobs:

1. During 1-on-1 sessions, Counsely presents AI-powered conclusions and suggestions in real-time to the counselor, enhancing the interface between therapist and client.

2. After a 1-on-1 session, data evaluating the counselor's performance, as well as data about the client and their concerns, is presented to the therapist in dashboard format to help them self-reflect and better understand their client.

## How we built it
### UI/UX
**User-Centered Design**

We emphasized a user-first approach in designing Counsely, as we believe software in healthcare should be as empathetic as possible.

To do so, we diligently researched the problem space prior to any other step:
![Problem Space Research](https://cdn.discordapp.com/attachments/1194827659318919168/1196110944267423845/Screenshot_2024-01-14_at_7.17.48_AM.png?ex=65b6701f&is=65a3fb1f&hm=edabc2b7a5e563a8038dbe8f630f96fc219bfb79b8d12e6cb537bcd16623a8bf&)

Once we concluded that the problems in the use space would be best addressed by focusing on the therapist, we were able to create user-flow diagrams for both therapist and patient to better understand their respective roles and intentions.
![User Flow Diagrams](https://cdn.discordapp.com/attachments/1194827659318919168/1196110712611807262/Screenshot_2024-01-14_at_7.16.52_AM.png?ex=65b66fe8&is=65a3fae8&hm=6d638a1d6e8ed254a3c94d3b1cc3b0eb027d0de52f0c95f90ae8a80a2e82ec61&)

Finally, this allowed us to write brief stories for concrete features that address each need, categorized by priority, such that implementation would be efficient and user-oriented. Reproduced below, it guided our technical steps.
![Feature Prioritization](https://cdn.discordapp.com/attachments/1194827659318919168/1196110711672287343/features.png?ex=65b66fe8&is=65a3fae8&hm=612c203dbf3891e6f97d040b67b856e593b7e2de4fd422e550a10f80dcea8c61&)



## Challenges we ran into
We had struggles with the microphone quality on our laptops, as it was quite noisy in some of the environments we were in during the hackathon event. We alleviated a large portion of this problem by adding a noise filtering feature.
Integrating certain statistics into the dashboard from the backend was frustrating at points due to package version errors as well.

## Accomplishments that we're proud of
### Technical
Real-time was an emphasis from the start. We knew that, in order to augment therapy sessions, feedback would have to flow steadily during the session, and not just as a summary after the client is gone. Implementing multithreading in order to manage the processes to facilitate this was a necessary challenge that we are proud to have accomplished.
### Design
As a tool in the mental health space, a calming design was important to us so we could contribute, not detract, from peaceful energy during sessions. We believe we have done so.
![Branding](https://cdn.discordapp.com/attachments/1194827659318919168/1196108417392181348/branding.png?ex=65b66dc5&is=65a3f8c5&hm=dbabed98cfe79d28c23a5adda87cd4eb91515491499736bdc0c68bcac23de906&)


## What we learned
For those working on frontend, more diverse experience with MUI was gained, and for those working with backend, more comfort and ease with Firebase was earned. 
Moreover, in a general sense, we learned how best to pivot when conditions were not ideal: unavoidable situations with APIs not functioning on the API-side, loud background noise, and other concerns taught us to keep moving forward.

## What's next for Counsely
Counsely would be diversified by the addition of a video-call feature, which was a part of one of the original design iterations. 
