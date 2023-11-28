import { Component, OnInit } from '@angular/core';
import { products } from '../shared/data/data';
import { PageDataService } from '../services/page-data/page-data.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  reviews: any[] = [];
  currentPage = 1;
  totalPages = 10;
  pageSize = 5;

  data:any;
  constructor(private pageData:PageDataService) { 
    // this.pageData.users().subscribe((data)=>{
    //   console.warn("data",data);
    //   this.data=data;
    // })
  }
  
  ngOnInit() {
    this.loadReviews();
  }
  iterationArray = new Array(4);
  quantity: number = 1; // Default quantity

  loadReviews() {
    this.pageData.users(this.currentPage,).subscribe((response) => {
      console.warn("data",response);
      this.data = response;

      // this.totalPages = response.totalPages;
    });
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.loadReviews();
  }

  incrementQuantity() {
    this.quantity += 1;
  }

  decrementQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }

    
  }
  products=products;
  coverImageSrc: string = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGBgaHBoaHRwcGh4eHhwjGhofHB4lHh4eIS4lHB4tJBwcJzgmKy8xNjU1HCQ7QDs0Py40NTEBDAwMDw8QHxISHj4sJCM8ND8/MTE0QD80PTQ2PjQ2NDQ0NDY/NjU0NTQ0NDQxNjQ9MTU6ND09NDQ0NDQ0NDQ0N//AABEIAOAA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAgMEBQYBBwj/xABCEAABAgMFBAYGCAUFAQEAAAABAhEAAyEEEjFBUQVhcfAGIjKBkaETQlKxwdEHFlNicqLh8RSCksLiFSMzstJDk//EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACkRAQACAgEEAAMJAAAAAAAAAAABAgMRMQQSIVETFZEFFCIyQVJhgfD/2gAMAwEAAhEDEQA/APZoIIIAggggCCCCAIIIz22OlciQ6Qb6hiEnqj8SsBwDmA0MVm0ttSZFJi2LPdAJU3AYd8ec7c6U2haSq9dQPVS4BGpaqhg4JzjQbV2Ou1WKTPv3ZyZCVKBqFi6FMSDQ5vXE8YBds6dpDiXL4FZbX1R8xFBa+nFoJotKRolIHmpzGKCyrMtHSh8YDZbD27Pn2qSi/MU60lQvqa6k3lOBRmGEO9Np0+RaFElQlrN5BvKILAXgwNCCcOBjM7B2qqyzkzkpvMCkpJIvJViHq2RfdE3pZ0mVbVI6gQiXeYXrxJUzklgMBhxgIw24seuscFq+cSZfSeelmmzP61t4EtGffmsJKP2gPSuiPSO0WieJZUVJYqU6UsEjez1JAif9eEiYpBQCApaQQpj1VEDqkVdtc4ovo/6Q2azSpiJyriyq/eulV8XQAHSDUEGn3uMZTb1tTMtEybKTdQtRITgOJANCSCW1MB7HYekdnmsBMuqPqq6p8TQ9xi4j5+k29aKDwy7xhF9sfpZNlUSogeyQSnhdJ6v8rQHskEUGwOkAtCFLUAi4BeU4u135GlQcHEXoL4QCoIIIAggggCCCCAIIIIAggggCCCCAIZtE0JSpRBISCSAHNA9BmYr9tbZRITXrLPZS+O86DfHn1m6VzBbJSlKe+tMtYJZIStQBYZBLuOFc3B7pF0tXMdKSUIqLo7Sh95WY3DveMZabQpYDYac++PQfpA6PWdElVoSm5MvJDAm6q8a9XAFnVQDAx50EwFrs+aFIKTUihGqTnhU1buELV0ltSJRsomf7YF0dUXgnJN5sGp8YqrHNCFg4PQ50OuUTdqyiUpWB2aHOhJLuN5gK8J0gVvhKVboVe8YDilcuITe8I6oeO+OJgOpPPOMKUrn5Qk0NHZobvQCzzWOXw1PDGOEvgPOE3y/mIBShy7RK2TISudLQtVxC1JQpVAQFEDOg44RFVVvdHLtMeMB6p0ykJsdhSiR1B6VNLxKlYk1NSXAP8sUHRvpguWQnFGaThQermkk8RGNnLUtr61KagvKJu7kueqKZQ2Q+bZ/KA9/2ZtSXPTeQa5pNFJ4j44RYR4VsPbq5KgXIbAjEfAjcY9a2Bt1FoDYLZyMiNU7t2XmQu4IIIAggggCCCCAIIIIAir21tVNnllRqovdGpGrYJGZ+cT5k1KQ5IAcByWqSwFcyY856RSrQZilzUKcuEgOpKUjQijZ5VgKHau0FrUpa1XlqxOgypkBpFFNQTxPfjFlNRU6xEVLx0gE2i0TF3UrWtaU0SFLKgngCaZeURz4DPfz8YfuiI6+f3gG3ff8AvF9ZFCZLAUajqqFH3Hf+higUrhFjsqfdWxLBVCdNORrAQbRLuLIL0LE68IAeWiz23ZsFimRY4HXdpFOhZHPzxgHN+nOUdA5q8JC9Y4pfEQC1K7uJ5rCDiPc/zjl/Rx8Y7fp8YAUTzn3CEpo3uhQVT3QIYfp4jKA6zFh4YQXv0ji1HOOIerQCxXlsd0KQka1y3Qy+ZpwhyUXgLfo5sn+Inpk3roU7qxoEklhrRo3m0ZcvZclKZN4rmKIvqZRADEsKAZUZtco85ss9SFBSVFKklwpNCCNDFhaLZNnkKmrUtTMCo4cAAw7oD1To7ttNoQxIExIF4aj2gNN2R7ovI8d2PPXLUFoLKTUZ8XbEEOG3x6lsjaKZ8sLTwI0IxHxBzBBgLCCCCAIIIIAggil6TbSMmSSl76+olsQVZ92W9tYDP9JLb6eb6ME+il9oj1lgt5VHjE/Y+30Il3ZylXkkhJYqdOIDjMYV0ill2UoQEnHFTa/IfCGbRL78vCApbaylKUBdBUogZBy7DhFbMTF7NlGtKCjngYrZ0nmsBWLSGiJMSS/OOgiznSjpz84iLRWAiLQMSfCEoWxhakjEDfDFqmpRVRrkNT8IDUImpXIJWoC8CknQhg7Grlgaa8YydonISWKmbSv7cYrp+0VqoDdGQ/8ARiIOX/u3aQFpN2inIK76AccSBDStpK9kNvJpxphEOVJUprqSp6CmJZ2Vuh9WzpgTeuG7Qu6S7szgF7sajHeY3EMTkpWdTMfU6naJ9keJpxLYQ5/qYPqkebb6jCGV7LmpYFB62FQas7KY0DA+ERVSVAOUkB2cijjEE+zCaXjmCMlJ4mJ/tcSbQhWB7i45EPjh5xneefuRJkWxSaYjQ5cDkmMtrkVBhBDD578udIRItSV4Y5jP9Rvh4CAEJ590S0Sq90JlSudYsJMvA5QCZcjDfFhZ5JhUmVzlFjZpHjy8AizSyK8uIuNiW8yJl9R6imSsPg2Cm3VPAnQQymSWFKRoUdHUISVTFkpYXkgUd6MfKA0wMdin2LtNEy/LSko9GQkJJclLUP6cNYuIAggggCMTteYJ1pJNUSeqPxZluP8A0jV7StYlSlzDW6kltTkO8sO+KjZPoZyQpUoIUvrkAkBR1o1c4CpUa9z+HIiJMQ5ORwfi3PeYt9pWZKFkJwpnhufwitUPiz6YGArJqHwbAZ4c0iDMQdKcKaY8c4tp0urNU4Nur84YWinBu50u2898BTrlvuBiBOk4xfLlOa55AaYV3Vip2raESpZWa1ZKXqSxLAnvruMBn9p2oSw2KzgH9+73xnZkwqLkuTrR+NaAZQqdNUtRUo3iruvNp7IEN473/M3uaIOv3vr63GtGh/Z6wJiLwvgkBjm9K8Hfe0R8d7/mb3NCkLIIINXBB1IqODRqltWifTN691Zj20qrUoC0AAdVruXaQ3dhD8si4kZ3JXBn444+UUqdrlQZaELejtdKt0O/6nKIIuTA4CaKJcDIOqjOdI+lXqKTO9/V8m/TX4164XKQXLvWZTh6PLdjEKXeQlAJYmcQQWLg3qeBiMra8st1ZimwdTVwxCsd/GGV7aLuhCUnC8XUonR6eJeLfPi539Ep0+XjX+4RdqrBmqupCQDdpmQcxkIhv8v0x7O+FTFlRKiXKjU6k+ru4wn9v8f1j5t7btM+31qV7axX06hZBBBYinfpj2YvNl2oL6pa9mNdWii/b/H9YXLWUkKBYg0On3f1jDbbSZET5UrBoi7EtInICwwUOqtOhaorl890XlmkO55y+flFHbNLHk4ifKSwGZy55ziIZyRgQTjTChOedHNIjpmTFkpH9IGDuK4Nz3haLtyEOMVVoN2/AZRGnbYtE0JQlSimpujMDBzmIXZdiihWp9yW8yMtwHfFzZpCUAhACRu5r3wEDZoVZly5polSriw7slQAqdzPn2d8eiRi7TJvoWjGjij1FYvujls9JZ0E4p6hzqmgfeQx74C2ggggM30zmn0aJSSxmLA7k1PmUxHKQAANw8IT0hmXrZJQzhCSsnS8SP7U+MKKoCPM92MMEDDKuESVjQQ0pIHu51rAMLcftuhhSaEAVAxpn+jeUSpo8/18oamUPdhwYV8BAQFS3bQN+sec9Ldo+lnFAqhBKR95XrEUyNO7fHoG37V6KQuYG6oLDerqp41UmPIzvrq2f4aeMBwjvfT1uFKNHPN9PW4Uo0dI5Gf4aeMcI5H9tPGIO+b/AJuFKNHPN9M+FKEQc0/tpjrA3I/tpjrAHm/nuFKGO+eXHcKYxzmn9tMdYm7KNnCwbQJqkD1ZIReXhS8oi7vIc6NiAhftx3CmMH7cd2GMWvSK0WaZNv2WUuTLupTcUlAulIY3VJUorUcSpVX1o1Vz+1O1AH7f44Y74P2/xwx3xuujHRGWuQJloSSpdUAKUm6huqSzdY4voRFtO6I2FAdaCkUS5mLGJAGeLkV3wHmDfL/HDHfHW+X+OGO+PT19ErAkpCkkFfVS8xdSxVTrYsk13Qo9ErAFCWUm+UkhPpFOQkpBLXsXUmuNYDC9Gdo+hnpKuwshCnwFeq9MQS76Ex6SZarwGhdm0FN2mMRD0IsR/wDmrBv+Rfzx3xdJQEsmpCQAly7hmqTnviiJI2eH69SchQFqeNMmiwQhqADgBCEJwxLPwpvy/SHU8W5z4wD0urbxy0OITWEI+fw+cOpFMOWgBILkgEgVLZCJXRi8lc9BcpvBSdziodtCluB0iVYLahCSkguK0z0iLK2lM/iZaVK6iwRdZLAso0LXsk55mA0sEEEBjrYHts0nBKEpHeE+cPLlqGKSlw9QxrxiSna6/TzUMgpQQ1C+9y+NIXtG2BYAAZnx+HhAVyt3OZhpQx5wh9YDGGF8OWgGl+Y5Bhpbc6H4QtdcMvhuhh/dn3Ac7oDJfSJPKZSEORfXe3kJSX81Jjz4+HDL8PxjafSQvrya4JWXzF4pGG9vKMY/c2nqvkK1eIOHlsvw/GOHlsvw/GF3S7MQdBUpfQPV46JanusQoUYAkp4B3LxdSm4Nc0y/D8YOaZfh36w/KkLUSEIWSmpCUlRRvYOS8NrQUkpUCgpxBcFDtkTn8YilWazqWq6kVxLYJFKiNjsL6P7RaEhaUMg4KWooSd6QAVHizRefRhsBC0JWtIN9SlkY9VBugcCan8UevgNQRR4Ttj6ObRJSVXAtIDkylFV3fdUAe8CMZOkKQoXkgjEP2VAEb8deMfVceY/STsCWJU1aUhLJM4EDsqR2mG8P4wD2yraidKRMR2VJBanVOBSWzBcd0QdvWdM5JlTLOuYgEF0lqs1CKhnxGlaR5zsjpBPsyVIlqSEqN8hSbzUAKhWj0pu8bD68Wv2peD9gYa9rygNdbEommWpdkmkyioo6oDFKkEOGAIN2gqKGjtD05CFT0Wg2aaqakXXuNdF1TO7BT3mcOUuMA8Yv68Wv2peD9gYa9ryg+vFr9qXg/YGGva8oD1GSu8lKmKXALHEOHY7xCZqKg80jzH68Wv2peD/8Yw17XlF50R6TT7RPKJpQU3FLDIbBSQ+OFcIDZXcQMuTDiSxbLnnvhKSBhXXzjrZ4ftAPI11rDsvGGkDnjyfGJCaecAoJiNbFBMyzqNP9xI8VJ58YlAaRE2spghWix5gt5tAbSCCCAxSQ1rtPFP8A1FPOJilc8Ij2vq26YMlISrySPGh8IeUcdMPGAaVDK+OcOqyaGbrUPeeMAwskmmr+PIji0D3/ABHyha1AFucP084iqNaVrT5b4DCfSGOvJVh1Fh9GKfe8Z/YNtEi0SpqkFQlqCroJBG4EZ5vGt+kGQ8uWvNCyknJpiHfDVAHfGL2davRTUTLgV6NQVdVgWLsumfxi15Zt+WdLi1bUKrVf/hhLNwywhKSkovIKAoAYrZiDqIblW1SrQGkKWooEu4EKUsshrxSC6lFnLHKGU7aa0+n9EhnV/tqcoAWCGOeBDcBDmzekBlWgzvRgpUn0akuEkJ6vrFBuqdKSCA4ybGO1smo/DP6uOPF3WiLRqNe0nZm2Ai0TVLlLF6hQhDqQzjrBRfPfFVty1+lnrmBKkA3GCgxTdloQ5AJFbpLPnEn/AF9fp1zihPXu9U+qEpui8btXGNK1irtM4qVeuhOAAAYJupCQ9KuA75kk5xwmZmdy9HbFfEcQ9Q+i/baES0IWQm6paFOcL6r6Twcs/HSPXY+U7JaVILjDMHT71MNI9D2B9IsyUkJUpKkpFEzXCgNyxiOLwHtMecfSTtpAlTkJUHCTKpXrTKHiwx4GKba/0lrWkpSpEsEVuOpbH72CeNOMecbQt6pqq0SC4Tp95VKwCLAkFaQpJUC/VBzILK7SXDsbrh2aLe3yJNwhFmmJWogoN8qZ63roWq9RKxgBjSkUtkWErSVXgAXN2isMXp1e+JZtCCnt2i8KjrAgFmfB7uW8PhEDH8GtgbhIICgxBJcgBYALmpAbJxCk2CYQ4RQnUCr3bzEuK0aGhaFs19bBi14sGwIHsjSOi1LGC160UrfUfdqfEwBPkKQWUGJF/F3DkX6bwabo0v0eoJtKy9PRL/mdaA+7OkZZayrtEq4knWocdjdG1+jqzVnLOHVQ+8OokUwqiA3pUK7s+79YeSrAxGC8M/ia/Lzh8E66e+KHZYh8N3wyC8OFeDU5/eAmWSQVm6CAAHJ40EM7U2dMISlKL/XSaYNg9cNe6FSJykqdJajYc8iGbVaphnWdN9YvLDsSAQCHBAoxD+EBrYIIIDKbfkKFqkrSlRCklBupfByHYU7USf8ATl3CpRAo904gY+O6H+lNqmSpBmSlXSlSXoD1SWOIpUiIi9oLWkAKooA5YFjjARVKc15MR5ivHxMOzB7/AH8iIquDfpAILEOrOnjrzrEczXNe/upzwhU5WOgY401r5+UQZ1qQmqevvqxJNG3wDe3rEZ9nmISkFRS6Xp1k9dIrqwrHnX1dtP2XitH5utU6R6ImapRBJFHIbBwABwxzhKlVMeXqst8VYtWGLzNY3Dzz6u2n7LxWj83Wrug+r1p+y8Vo/N1q7o9CgjwfMMnqHP4tnnn1etP2XitH5utXdAOjtp+y8Vo/N1qjSNP0m2sZCEJSWWskBTPdSGvKANCahn13RTLskxBMz+KnMBeCzdKVaAAzT4ENSPVjz5b17p1G+G4tMxtBHR20/ZeK0efWwg+rtp+y8Vo8+thGu2DtMz5F9QZSSUqA1ABccQQWh7/U0ews0fs/rjHGerzxaa6jwz32Yv6vWn7L86PPrdmD6vWn7L86PPrdndG1/wBSR7K/AeVa90LmW9KUhRCmLYCtU3g4emnEiJ98z/tg759MP9XrT9l+dH/rs7oPq9afsvzo/wDXZ3RtFbTQPVXgD2dcM8c4kSrUlSrod7oVk2LNjjSE9ZniNzEJ32YT6u2n7L86P/XZ3R36u2n7L86P/XZ3R6DHQYx8wy+oPiy8/wDq5afsvzo8ut2d0egdFtnKk2ZCFAJWolaxvUpmpRglvCFJrSJiFaVAxL4v+0e7pc18sTa0eHStpt5lNQz+Ay44w7LUG5Y4+MRbu8v8zC5ay+LYN3sfnHrbSnI555MPoDiGJYJDA0O/f8ofXxqzcaftAOpVjzzjCLHLvWyXohKl4agjH+ZPlvbstTlhr7uTD3RVN6ZaJrUKghJ1uivkEecBqIIIICLb7MJktcs+skjgSKHuLGMXsiYTLuq7ctRQrcQeR3RvownSQKs89SkpF2cly+AUO1R6mr/zeIKXPGJLAUc0He+EVFp2smgQL+QJoH95qN0RxZp05Yd61D5tokB+9mhabKhGPWIzOFHdgzDLHfAR2mTC6iWruT3NiMf1gQhKBU3jjuxfjHbRa8XNKNTjECbau6AkWi1ZaRDFqZQOIiJNtBPCI61xm9IvWa24lJjbSIWCAQXBhUZj+OmISRLKScWUKHhUNFcrpRaAWKUOMrig/DrUaPj3+z8kWnt1pxnHK36X7LVNQhSAVKRe6oxKVM7akMKcYqLSgmypQASu7KF0B1OClxdxf5RwdK7RSks8Eq63DrUaAdKrRpLP8iutuHWyj1YsWalIrMROv5aitojTQ9HNmqkyLqqLUSs53SQABxAA73iV/DTftsvYHzjKDpXaKUQf5FV3DrUMcHSu0aI/oVXcOtjHG3S57Wm068pNbb21hs82v+7mPVyzrvhdokzD2JlzteqDiQRjozcCdzZAdK7Roj+hVdw62MH1rtGiP6FV3drGJ91z734Tss1irPNym5+yMGbXv7s4kyEKAZSrx17h8XPfGK+tdo0l4+wrw7WO+D612jSXj7CvDtY74lujzWjU6OyzdRwlow46VWg4BGPsK/p7WMXEm1zlo/3boJrdSCG0BLlzwjNfs/LM+daPhyuU2oPEuTPGrYYbvfGeSusTbNOq0fXpSKViteIdojUaaVExx72h1CsCX4N7zl+sVFltTZgB+fhE+TaBdar0GmhIjarCWp67z7/hE+x3StN8Mmj6Z+Xziskr3vgdMfg/viQk47nq2ZwgL632dCgfRrQlZBAqGJODtm8SNiWIyZKUKIKg5URqS/lh3RmpUgzZ6JPqpN9bM1KsRi1QP5t0baAIIIIAiq29sz+IlFAICwbyCciKZZEEjv3RawQGZs1rkWdyuYFTGCVlIcBshpV/DKMftraSZk1a0hkkuAfPvLPxMXHTHZJQszU9iZRQySo57gceN7WMRaFGoMB2bOJeIqlQp3htYgEqOUIhREChAJiNarCiYK0OShj+0S2jqRAUJ2elDiaFAZTEdYDQFGQ1avGIy7AtipIvpGKkOfJnScHyrjpqRESbs1CjeAKFDBSDdI3hsDvgMvzT+2mOsdbkfCnajRrscw+uhY0WhKjxCmd98RzYF5yZJ3pK0twAUA/dEFJzT4U7Uc/anuFO1F6iwrDNIkCvrFatPvs9Icl7OmANfQgfcQNXd8b2+ApEWVTORdTTrKDBjpRyrhEiTYb9EAqwdZ6qBWoAIdSt9OEXMvZaAQpQK1arL+WDxokFKkXQyQQAwwdOD+OMUZ6wbORLrirC8fhpxiwAjjR0QCTAlfdCiISpEBLs87nCLOXaaZ884xQoMSrPMLgXgHLOcA590BprNaSWc0DOa93dTzieZqUJKyXCas+eQ8QIlbV6NJlSL8oqUpDFT1vDMsMGxpk/GIexbF/ELSGaUghSsas7B2zPk+sBoei9iuoM1Q681lE1BYDq0ODuS28DKL+OR2AIIIIAggggGLVZkzEKQsOlQYiPJ+kOyVSVlCsQ5QrJaX9+oyMevxXbY2WmfLKFUIqlWaTkd41GcB4rJlqUoJSkqWosAkOSeEOW2xTJSrsxCkKZ2UGcajIjhG72JsYWNa7TaCEBIKEgVvE4kZ4BhnUvhFD0y28i1Kl3EqSmWFVUACSpnoCWAujzgMyRHAIXdgaASRA0LaOgQCQIU0dAgaA40cMdMBEAmOx0COtAJaJWz5hCmxemu/4RGaFJoYB+2S2VQMPf5nUeMMiJ168i6A+YZnBArxiEBADRwphYh2TIWt7iFKapupJbi2EBEKIQpOkSrsSbDYFKUkJSVKUWSBmeavuOkBcdGrTaryUy5ilKcJCFKKkAZ0JokBnb3x6bZ7OhAIQlKXJJugAEnE0zis2BsZNnRkVqAvKG7ADcH7/AC6gCCCCAIIIIAggggCCCCArtr7LRaEXVCoqk5g/EaiPLttbFXIVdWG9lQ7Kh90+FMRHsURbbY0TUlExIUk5H3g4g7xAeHqQRQwkJrSNr0g6IrQ6pYvoqaDrJ4pA6w3jwhv6P5QFoWpQBCZZN84J6yc8nD10BgMeU5GACNL00t8mfOSqTVkMpV0i8XpiASwzjPBMAlo60KaBoBsiBoW0cIgEgQNCmgaA40DQpo60A5Zls48OPPujk5NSR7m8It7F0atEyV6ZKRcYkAqZSgMWHccSIrVMRzznAMtGw6GbelSEKlzAU3lXgtnFQEsrMM2OFThGTQh8IvthdGZs9lEXJftKGP4E58TT3QD229hzFWtSUJvCab6SkUuqNSTgGOb5jUCNnsLYqLOnJSyOspmHBIyHv8hYWCyJlITLS91IYOXMSYAggggCCCCAIIIIAggggCCCCAIIIIAitt2y0rRMQlpZmdpSUhz+L2tO8xZQQHlu0+ic+VUJC0j1kufFPaHc4jPqQ0e5RXW7Y8id/yS0k+0Oqr+pLGA8caN1bej9kTYvSJoq4FpWVF1KIcBnapozUiTbOg0s/8cxSdAoBQHAhm73hG3+js5cqzypbKTKQQesASpgHY0yOecBgCmONF1N6NWlOMpfckK/6kxGOyLQD/wAM3/8ANfygDYGyTaJolhVwMVFTPQNgMy5EP9Jdhfwq0JCryVgkFmIYsQQ+8VjuzbHaZcxC0SpoUkj/AOa8MwaMxFIuuleyLROtKlIQpSLqQk0YUqASWxfxgMaEwXY0tm6F2lR6yUJH3l1/KFRcWPoGkVmTSdyAB+ZTv4QDXQ/bSlpFlUAnqqShWdHoRueh3NFJs7o1aZhuhBQASFKV1U0LFs1YZAiPQdnbBkSKoli8PWPWV3E4dzRawGc2V0TkymUoekWKgqFAdyfm/dGjgggCCCCAIIIIAggggCCCCA//2Q=='; // Initialize with the URL of the default cover image
  galleryImages: string[] = ['https://admin.aptools.sa/uploads/images/products/d_58964_1.jpg', 'https://admin.aptools.sa/uploads/images/products/Marble.jpg','https://admin.aptools.sa/uploads/images/products/d_58964_1.jpg', 'https://admin.aptools.sa/uploads/images/products/Marble.jpg' /* Add more gallery image URLs */];

  changeCoverImage(imageSrc: string) {
    this.coverImageSrc = imageSrc; // Update the cover image source when a gallery image is clicked
  }
  reviewText: string = '';
  stars: number[] = [1, 2, 3, 4, 5];
  selectedStars: number = 0;

  rateProduct(rating: number) {
    this.selectedStars = rating;
    // You can perform additional actions here, like submitting the rating to a server.
  }

}
