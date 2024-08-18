export class CreateArticleDto {
  //Property to hold the data, and their types
  authors: string[];
  title: string;
  source: string;
  pubyear: number;
  doi: string;
  claim: string;
  evidence: string;
}

// dto class is used to transfer data when creating/updating article, it make sure the input data is structured as expected
