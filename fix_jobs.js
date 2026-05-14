const fs = require('fs');
const content = fs.readFileSync('src/Components/jobs.js', 'utf8');
const lines = content.split('\n');

const newMiddle = [
'        <h2',
'          className={`text-4xl sm:text-5xl font-bold mb-16 text-center text-white transition-all duration-1000 ${',
'            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"',
'          }`}',
'        >',
'          Experiencia Laboral',
'        </h2>',
'',
'        <div className="space-y-12">',
'          {jobsData.map((job, index) => (',
'            <JobCard',
'              key={index}',
'              job={job}',
'              isVisible={isVisible}',
'              index={index}',
'            />',
'          ))}',
'        </div>',
'      </div>',
'    </section>'
];

// Lines 141-194 (0-indexed: 140-193) need to be replaced
const before = lines.slice(0, 140);
const after = lines.slice(194);

const newContent = [...before, ...newMiddle, ...after].join('\n');
fs.writeFileSync('src/Components/jobs.js', newContent, 'utf8');
console.log('Done! Total lines:', newContent.split('\n').length);
