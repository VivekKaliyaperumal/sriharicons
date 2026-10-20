// Frequently asked questions, moved from the former /faq/ page to the home page.

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    id: "mud",
    title: "Traditional mud houses",
    items: [
      {
        q: "What is a traditional mud house?",
        a: "A home whose walls are built mainly from earth — for example compressed earth blocks, rammed earth, cob or mud plaster over a frame. Traditional homes in Tamil Nadu often combine earth walls with timber, stone plinths and sloping tiled roofs. The exact method depends on the soil, design and climate."
      },
      {
        q: "Can a mud house be designed for modern living?",
        a: "Yes. A mud house can include modern kitchens, bathrooms, wiring, plumbing and storage. These need to be planned early so pipes, fixings and wet areas are detailed to suit earth walls."
      },
      {
        q: "How do you assess whether a site is suitable?",
        a: "We look at the plot’s drainage, soil type, exposure to heavy rain, ground water and access. Soil testing by qualified professionals helps the engineer decide on the foundation, and separate checks can show whether site soil can be used for walls."
      },
      {
        q: "What factors affect the construction cost?",
        a: "Built-up area, wall method, roof type, foundation needs, finishes, fittings, site access and availability of suitable soil and materials nearby. We can discuss an estimate only after understanding your site and requirements."
      },
      {
        q: "What maintenance should owners consider?",
        a: "Earth walls usually need periodic attention — touching up plaster, checking roof tiles and gutters before the monsoon, and keeping water away from the base of walls. How much depends on the finishes and detailing used."
      },
      {
        q: "Can mud houses incorporate modern kitchens and bathrooms?",
        a: "Yes, with care. Wet areas typically use moisture-resistant wall finishes, a raised or protected base and good ventilation. These details are designed for each project."
      },
      {
        q: "What details help manage rainwater and moisture?",
        a: "Deep roof overhangs, a raised stone or concrete plinth, a damp-proof course, proper gutters and drainage away from walls, and breathable plasters. Together they help keep earth walls dry."
      },
      {
        q: "What approvals or professional drawings might be required?",
        a: "Most projects need architectural and structural drawings, and many need building-plan approval from the local authority. Requirements vary by location. We can help prepare documents and coordinate the process; approvals are granted only by the authority."
      }
    ]
  },
  {
    id: "planning",
    title: "Planning and approvals",
    items: [
      {
        q: "How do I start planning my house?",
        a: "Share your plot location, its approximate size, the rooms you need and any style you like. We will discuss what is possible on your site and the next steps."
      },
      {
        q: "Do I need building approval for my house?",
        a: "In most locations, yes. The relevant local authority sets the rules. We can review your documents and help with the submission, but the authority grants the approval."
      },
      {
        q: "Can you work on a plot I already own outside a city?",
        a: "We serve projects across Tamil Nadu. Share the location and we will confirm whether we can take it up."
      },
      {
        q: "Can I combine a mud house with conventional construction?",
        a: "Yes. Some homes use earth walls for living spaces and conventional construction for wet areas or upper floors. The engineer decides what is structurally suitable."
      }
    ]
  },
  {
    id: "soil",
    title: "Soil testing and drawings",
    items: [
      {
        q: "Why do I need a soil test?",
        a: "Soil conditions vary between plots. A test helps the structural engineer choose a foundation that suits the ground, instead of relying on assumptions."
      },
      {
        q: "Who carries out the soil test?",
        a: "Qualified soil-testing professionals or laboratories. We coordinate the visit and share the report with the engineer."
      },
      {
        q: "What drawings will my project need?",
        a: "Usually floor plans, elevations, sections and structural drawings, plus electrical and plumbing layouts. Approval submissions may need specific formats."
      }
    ]
  },
  {
    id: "interiors",
    title: "Kitchens and interiors",
    items: [
      {
        q: "Which modular kitchen layout is right for me?",
        a: "It depends on room size, window and door positions and how you cook. L-shaped and parallel layouts suit many homes; U-shaped and island layouts need more space."
      },
      {
        q: "Which materials do you use for wardrobes and kitchens?",
        a: "We discuss plywood, boards, laminates, veneers and hardware options with you, comparing moisture resistance, durability and budget."
      },
      {
        q: "Can you design a pooja unit for a small space?",
        a: "Yes. Wall-mounted and corner units work well in smaller rooms, with storage for pooja items below."
      },
      {
        q: "Do you take up interiors for homes you did not build?",
        a: "Yes. Interior works can be taken up for existing homes. Share photos and measurements to begin."
      }
    ]
  }
];
