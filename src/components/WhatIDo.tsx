import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }

    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">

          {/* FRONTEND */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FRONTEND</h3>
              <h4>Building Interactive UIs</h4>
              <p>
                Crafting performant, responsive interfaces with modern frameworks.
                From SPAs to micro-frontends, I deliver pixel-perfect experiences.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Angular</div>
                <div className="what-tags">Next.js</div>
                <div className="what-tags">TypeScript</div>
                <div className="what-tags">JavaScript</div>
                <div className="what-tags">Material UI</div>
                <div className="what-tags">HTML5</div>
                <div className="what-tags">CSS3</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* BACKEND */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>BACKEND</h3>
              <h4>Scalable Server Architecture</h4>
              <p>
                Designing robust APIs and microservices. From CMS platforms to
                complex business logic, I build backends that scale.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Node.js</div>
                <div className="what-tags">NestJS</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">PostgreSQL</div>
                <div className="what-tags">REST APIs</div>
                <div className="what-tags">Microservices</div>
                <div className="what-tags">Python</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

          {/* AI & ML */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI & ML</h3>
              <h4>Building Intelligent AI Systems</h4>

              <p>
                Developing intelligent applications using machine learning and
                large language models.
              </p>

              <h5>Skillset & tools</h5>

              <div className="what-content-flex">
                <div className="what-tags">Machine Learning</div>
                <div className="what-tags">Natural Language Processing</div>
                <div className="what-tags">Embeddings</div>
                <div className="what-tags">Vector Databases</div>
                <div className="what-tags">Semantic Search</div>
                <div className="what-tags">RAG Pipelines</div>
                <div className="what-tags">Python</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">Endee Vector DB</div>
                <div className="what-tags">LLM APIs</div>
                <div className="what-tags">Node.js Integration</div>
                <div className="what-tags">Document Chatbots</div>
                <div className="what-tags">AI Search Systems</div>
              </div>

              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");

  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}