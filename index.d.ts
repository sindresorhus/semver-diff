declare module SemverDiff {
    type ISemverDiffResponse =  "major" | "minor" | "patch" | "prerelease" | "build" | null

    export default function(versionA: string, versionB: string): ISemverDiffResponse;
}

declare module "semver-diff" {
    export = SemverDiff.default;
}