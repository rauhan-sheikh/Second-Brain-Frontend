// import "./index.css";
import { Button } from "../components/Button";
import { ShareIcon } from "../icons/ShareIcon";
import { PlusIcon } from "../icons/PlusIcon";
import { Card } from "../components/Card";
import { SideBar } from "../components/SideBar";
import { CreateContentModal } from "../components/CreateContentModal";
import { useState } from "react";

function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div>
        <SideBar />
      </div>
      <div className="ml-64 p-8">
        <CreateContentModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
        <div>
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>
        <div>
          <Button
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
            onClick={() => setModalOpen(true)}
          />
        </div>
        <div className="flex flex-wrap gap-6 mt-8">
          <div>
            <Card
              title="Attention Is All You Need"
              description="The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely..."
              link="https://arxiv.org/abs/1706.03762"
              type="article"
            />
          </div>
          <div>
            <Card
              title="The Testament"
              description="In a plush Virginia office, a rich, angry old man is furiously rewriting his will. With his death just hours away, Troy Phelan wants to send a message to his children, his ex-wives, and his minions, a message that will touch off a vicious legal battle and transform dozens of lives."
              link="https://openlibrary.org/books/OL32776507M/The_Testament"
              type="book"
            />
          </div>
          <div>
            <Card
              title="OpenAI’s new browser feels familiar…"
              description="OpenAI just entered the browser wars with their release of ChatGPT Atlas, an agent web-browser than runs on vibes and Chromium.

But is it really just a Perplexity Comet knock-off or could its integration with ChatGPT make this a genuine Chrome killer?"
              link="https://youtu.be/5uSboan45Zg?si=Gd4fe5CltK5hXzDt"
              type="video"
            />
          </div>
          <div>
            <Card
              title="Florian Wiertz"
              description="Interview after Frankfurt Game."
              link="https://x.com/readswithravi/status/1980988279291007010"
              type="tweet"
            />
          </div>
          <div>
            <Card
              title="Florian Wiertz"
              description="Interview after Frankfurt Game."
              link="https://x.com/readswithravi/status/1980988279291007010"
              type="other"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
